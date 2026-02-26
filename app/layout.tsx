import type { Metadata, Viewport } from 'next'
import { Lexend } from 'next/font/google'

import './globals.css'

const lexend = Lexend({ subsets: ['latin'], variable: '--font-lexend' })

export const metadata: Metadata = {
  title: 'Sistemas de Seguridad y Contra Incendio – Alvic',
  description:
    'Instalación y mantenimiento de sistemas contra incendio, CCTV y alerta sísmica para empresas. +15 años de experiencia. Solicita tu cotización sin costo.',
  openGraph: {
    title: 'Alvic | Ingeniería en Seguridad y Conectividad',
    description:
      'Instalamos y mantenemos sistemas contra incendio, CCTV y alerta sísmica para empresas en México. +15 años protegiendo tu negocio.',
    type: 'website',
    url: 'https://www.alvicss.com/',
    images: [
      {
        url: 'https://www.alvicss.com/images/hero-electric.jpg',
        width: 1200,
        height: 630,
        alt: 'Alvic Soluciones - Ingeniería en Seguridad',
      },
    ],
  },
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
