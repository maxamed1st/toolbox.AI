import './globals.css'

export const metadata = {
  title: 'ToolBox.AI',
  description: 'AI tools for your convenience',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
