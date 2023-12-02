import Link from "next/link";
import Image from "next/image";

import babyPic from 'pub/babypicCropped.jpeg';

export default function BackHomeButton() {
    return (
        <Link href="/" className="flex flex-row items-center pt-2 pl-10">
            ↖
            <Image 
                src={babyPic}
                quality={100}
                className="w-8 h-8 p-1"
                alt="back home"
                priority={true}
            />
        </Link>
    );
}