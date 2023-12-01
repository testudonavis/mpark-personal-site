import { Cormorant } from 'next/font/google'
import '../globals.css'

const inter = Cormorant({ subsets: ['latin'] })

export const metadata = {
  title: 'Mike Park',
  description: 'Personal website of Mike Park',
}

export default function ProjectsLayout({ children }) {
  return (
    <section>
      {children}
    </section>
  )
}
