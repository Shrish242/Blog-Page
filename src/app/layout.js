import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar/Navbar.jsx'
import Footer from '../components/Footer/Footer.jsx'
import { ThemeContextProvider } from '../context/Themecontext.jsx'
import Themeprovider from '../provider/Themeprovider'
import Authprovider from '../provider/Authprovider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shrish Blog',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Authprovider>
        <ThemeContextProvider>
          <Themeprovider>
        <div className='container'>
          <div className='wrapper'>
          <Navbar />
          
          {children}
          <Footer/>
          </div>
          </div>
          </Themeprovider>
          </ThemeContextProvider>
          </Authprovider>
        </body>
    </html>
  )
}
