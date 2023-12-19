import Link from 'next/link';
import Image from 'next/image';

import homePic from 'pub/home.svg';

export default function BackHomeButton() {
  return (
    <Link href="/" className="flex flex-row items-center">
      <Image src={homePic} quality={100} className="w-8 h-8 p-1" alt="back home" priority />
    </Link>
  );
}
