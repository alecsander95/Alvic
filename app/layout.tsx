import type { Metadata, Viewport } from 'next'
import { Lexend } from 'next/font/google'

import './globals.css'

const lexend = Lexend({ subsets: ['latin'], variable: '--font-lexend' })

export const metadata: Metadata = {
  title: 'Alvic Soluciones',
  description:
    'Ingenieria, instalacion y mantenimiento en sistemas de seguridad, deteccion y redes estructuradas. Soluciones integrales para sectores industrial, residencial, comercial y gubernamental.',
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0E2A3A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={lexend.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
