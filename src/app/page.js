'use client'

import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';




export default function Home() {
  const [maxi, setMaxi] = useState(false);

  function onMikeHover(inside) {
    setMaxi(inside);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-white">


      <div 
      className="text-red text-2xl pb-10"
      onMouseEnter={() => onMikeHover(true)}
      onMouseLeave={() => onMikeHover(false)}
      >
        {maxi ? 'mike park (maxi)' : 'mike park (mini)'}
      </div>
      <div className="text-blue text-xl p-10">
        <Link href={`/contact`}>links</Link>
      </div>
    </main>
  )
}
