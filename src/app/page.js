'use client'

import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import babyPic from 'pub/babypic.jpg';




export default function Home() {
  const [maxi, setMaxi] = useState(false);

  function onMikeHover(inside) {
    setMaxi(inside);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <div className="md:shrink-0">
        <Image 
        src={babyPic}
        quality={100}
        className= "w-full object-cover md:h-full"
        alt="baby mike"
        />
      </div>
      

      <div 
      className="text-prim-text text-2xl pb-10"
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
