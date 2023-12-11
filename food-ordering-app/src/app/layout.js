import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'



const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={roboto.className}>
        <main className="max-w-4xl p-4 mx-auto">
            <Header />           
            {children}
            <footer className="p-8 mt-16 text-center text-gray-500 border-t">
              &copy; 2023 All rights reserved
            </footer>
        
        </main>
      </body>
    </html>
  )
}
