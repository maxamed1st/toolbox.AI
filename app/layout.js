import './globals.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata = {
  title: 'ToolBox.AI',
  description: 'AI tools for your convenience',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='w-[80%] mx-auto min-w-max bg-[#4E7960] '>
        <Nav />
        <main className='bg-white p-2'>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
