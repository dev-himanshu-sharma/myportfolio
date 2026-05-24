import { NextRequest, NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"
import nodemailer from "nodemailer"

interface ContactMessage {
  name: string
  email: string
  subject: string
  message: string
  createdAt: Date
}

// Email transporter configuration
function createTransporter() {
  // For production, use your email service (Gmail, SendGrid, etc.)
  // For now, we'll check if email credentials are available
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })
  }
  return null
}

async function sendEmailNotification(message: ContactMessage) {
  const transporter = createTransporter()
  
  if (!transporter) {
    console.log("Email credentials not configured, skipping email notification")
    return
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "hs764664@gmail.com", // Your email address
    replyTo: message.email,
    subject: `Portfolio Contact: ${message.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00d4ff;">New Contact Message</h2>
        <hr style="border: 1px solid #333;" />
        <p><strong>Name:</strong> ${message.name}</p>
        <p><strong>Email:</strong> ${message.email}</p>
        <p><strong>Subject:</strong> ${message.subject}</p>
        <hr style="border: 1px solid #333;" />
        <h3>Message:</h3>
        <p style="white-space: pre-wrap;">${message.message}</p>
        <hr style="border: 1px solid #333;" />
        <p style="color: #666; font-size: 12px;">
          Sent from your portfolio website at ${new Date().toLocaleString()}
        </p>
      </div>
    `,
  }

  await transporter.sendMail(mailOptions)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    const contactMessage: ContactMessage = {
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    }

    // Save to MongoDB
    try {
      const db = await getDatabase()
      const collection = db.collection("messages")
      await collection.insertOne(contactMessage)
    } catch (dbError) {
      console.error("MongoDB Error:", dbError)
      // Continue even if DB fails - we'll still try to send email
    }

    // Send email notification
    try {
      await sendEmailNotification(contactMessage)
    } catch (emailError) {
      console.error("Email Error:", emailError)
      // Continue even if email fails - message is saved to DB
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact API Error:", error)
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    )
  }
}
