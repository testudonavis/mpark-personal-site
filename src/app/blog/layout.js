import '@/globals.css'

export const metadata = {
  title: 'Mike Park',
  description: 'Personal website of Mike Park',
}

export default function BlogLayout({ children }) {
  return (
    <section>
      {children}
    </section>
  )
}
