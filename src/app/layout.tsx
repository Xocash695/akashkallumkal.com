import './globals.css'
import Navbar from "@/components/Navbar"
import { Source_Code_Pro } from "next/font/google"

const source_code_pro = Source_Code_Pro({ subsets: ['latin'], style: 'italic', weight: '300' })


export const metadata = {
  title: 'Akash Kallumkal',
  description: 'Akash Kallumkal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={source_code_pro.className}>  
      <Navbar/>
      {children}
      </body>
    </html>
  )
}
