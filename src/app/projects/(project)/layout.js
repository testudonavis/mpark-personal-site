import { JetBrains_Mono } from 'next/font/google';

export const metadata = {
  title: 'Mike Park',
  description: 'Personal website of Mike Park',
}

const jetbrains = JetBrains_Mono({ subsets: ['latin'] });

export default function ProjectLayout({ children }) {

  return (
    <div className="w-11/12 mx-auto">
      <div className={`${jetbrains.className} relative shadow-lg after:shadow-inner2 after:border-4 after:border-pic-frame after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 w-full h-full p-4 after:pointer-events-none`}>
        {children}
      </div>
    </div>
  )
}
