import { Poppins } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'
import Header from '@/components/Header'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),

  title: {
    default: 'AI-Integrated Student Engagement Platform',
    template: '%s | CampusCompass',
  },

  description:
    'CampusCompass is an AI-integrated student engagement platform that brings together intelligent timetable management, a 3D virtual campus, clubs and student activities, daily announcements, and a dedicated FY student portal. Designed to enhance communication, accessibility, personalization, and the overall campus experience.',

  keywords: [
    'CampusCompass',
    'AI student engagement',
    'student engagement platform',
    'AI timetable management',
    'academic timetable',
    '3D virtual campus',
    'campus navigation',
    'student clubs',
    'college events',
    'student activities',
    'daily announcements',
    'college notifications',
    'FY student portal',
    'AI education',
    'higher education',
    'campus management',
    'student experience',
    'MITAOE'
  ],

  authors: [{ name: 'CampusCompass' }],
  creator: 'CampusCompass',

  openGraph: {
    title: 'AI-Integrated Student Engagement Platform',
    description:
      'An AI-powered platform combining intelligent timetable management, a 3D virtual campus, student clubs, announcements, and a comprehensive FY student portal to deliver a smarter campus experience.',
    type: 'website',
    siteName: 'CampusCompass',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AI-Integrated Student Engagement Platform',
    description:
      'AI-powered platform for timetable management, virtual campus exploration, student clubs, announcements, and an enhanced student experience.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },

  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
}
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#14b8a6' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: { fontSize: '14px' },
            success: { iconTheme: { primary: '#10b981', secondary: 'white' } },
            error: { duration: 6000, iconTheme: { primary: '#ef4444', secondary: 'white' } },
          }}
        />
      </body>
    </html>
  )
}
