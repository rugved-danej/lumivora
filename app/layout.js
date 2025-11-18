// app/layout.js
import './globals.css'
// app/layout.js
import { AuthProvider } from '@/context/AuthContext'

export const metadata = {
  title: 'Lumivora',
  description: 'Premium Beauty Tools & Home Gadgets',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://cdn.lineicons.com/4.0/lineicons.css" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}