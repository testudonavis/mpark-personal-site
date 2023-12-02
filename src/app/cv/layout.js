import '@/globals.css'

export const metadata = {
  title: 'Mike Park',
  description: 'Personal website of Mike Park',
}

export default function ResumeLayout({ children }) {
  return (
    <section>
      {children}
    </section>
  )
}
