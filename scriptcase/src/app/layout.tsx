import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html className='flex justify-center' lang="en">
      <body className={`${inter.className} bg-slate-500 lg:w-1/3 w-full`}>
        {children}
        </body>
    </html>
  )
}
