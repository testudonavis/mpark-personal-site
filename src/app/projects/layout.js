import { Cormorant } from 'next/font/google'
import '@/app/globals.css'

const inter = Cormorant({ subsets: ['latin'] })

export const metadata = {
  title: 'Mike Park',
  description: 'Personal website of Mike Park',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
