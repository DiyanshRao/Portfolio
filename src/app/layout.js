import { Inter } from 'next/font/google'
import './globals.css'
import StarsCanvas from '@/components/canvas/Stars'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio || ',
  description: 'Diyansh Rao',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <StarsCanvas />
      </body>
    </html>
  )
}
