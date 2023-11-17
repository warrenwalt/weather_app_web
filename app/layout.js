import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Polishing',
  description: 'Generated by create next app',
}

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {props.children}
        <div className='flex space-x-4 justify-center'>
        {props.team}
        {props.analytics}
        </div>
        <footer>@2023 copyright <p>all rights reserved</p></footer>
      </body>
    </html>
  )
}
