import './globals.css';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import { SortContextProvider } from '@/utils/context';

export const metadata = {
  title: 'ToolBox.AI',
  description: 'AI tools for your convenience',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='w-[80vw] mx-auto bg-[#4E7960] '>
        <SortContextProvider>
          <Nav />
          {children}
        </SortContextProvider>
        <Footer />
      </body>
    </html>
  );
}
