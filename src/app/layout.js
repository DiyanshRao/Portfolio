import { Inter } from 'next/font/google'
import './globals.css'
import StarsCanvas from '@/components/canvas/Stars'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio || Diyansh Rao',
  description: 'my portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <StarsCanvas />
      </body>
    </html>
  )
}
