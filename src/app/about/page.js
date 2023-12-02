import Image from "next/image";

import profilePic from 'pub/mike-venice.png';

export default function About() {
  return (
    <section className="flex min-h-screen flex-col p-10">
      <Image
          src={profilePic}
          quality={100}
          className= "w-24"
          alt="mike park"
          priority={true}
      />
      <p>
        a scrapper with a dash of chivalry
      </p>
    </section>
  )
}
