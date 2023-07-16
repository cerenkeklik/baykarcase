import './globals.css'
import type { Metadata } from 'next'
import Header from './components/navigation/header'
import Footer from './components/navigation/footer'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ["100" , "300" , "400" , "500" ,"700" , "900" ],
  subsets: ['latin'],
  display: 'auto'
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='flex justify-center' lang="en">
      <body className={`${roboto.style.fontFamily} 2xl:w-2/3 2xl:shadow-xl flex flex-col`}>
       <div className='flex flex-col'>
       <Header />
        {children}
       </div>
        <Footer />
      </body>
    </html>
  )
}
