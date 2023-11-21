import { Inter } from 'next/font/google'
import './globals.css'
import CheckParallelLayout from './components/CheckParallelLayout'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Polishing',
  description: 'Generated by create next app',
}

export default function RootLayout(props) {
  // console.log(props, '🆒')
  return (
    <html lang="en">
      <body className={inter.className}>
        {props.children}
        {/* {props.modal} */}
        <div className='flex space-x-4 justify-center'>
        blah blah blah
        </div>
        <CheckParallelLayout />
        <footer className='flex border-2 border-black rounded-3xl justify-center space-x-4'><p>@2023 copyright</p> <p>all rights reserved</p></footer>
      </body>
    </html>
  )
}
