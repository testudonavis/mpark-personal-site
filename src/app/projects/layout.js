import '@/globals.css'

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
