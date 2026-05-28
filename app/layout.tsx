import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CursorAura } from '@/components/cursor-aura'
import { MernRain } from '@/components/mern-rain'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans'
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: 'Himanshu Sharma | MERN Stack Developer',
  description: 'Full-stack developer specializing in MERN stack. Building scalable web applications and real-time systems.',
  keywords: ['MERN Stack', 'React', 'Node.js', 'MongoDB', 'Express', 'Full Stack Developer', 'Web Developer'],
  authors: [{ name: 'Himanshu Sharma' }],
  openGraph: {
    title: 'Himanshu Sharma | MERN Stack Developer',
    description: 'Full-stack developer specializing in MERN stack. Building scalable web applications and real-time systems.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <CursorAura />
          <MernRain />
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
