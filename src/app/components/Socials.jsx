import Image from 'next/image';
import Link from 'next/link';

import '@/globals.css';
import githubIcon from 'pub/socials/github.svg';
import instaIcon from 'pub/socials/insta.svg';
import linkedinIcon from 'pub/socials/linkedin.svg';
import EmailButton from './EmailButton';
// edited the colors on https://deeditor.com/

const socialIcons = [
  {
    imgUrl: linkedinIcon,
    link: 'https://www.linkedin.com/in/mikeparkus/',
    alt: 'LinkedIn',
  },
  {
    imgUrl: instaIcon,
    link: 'https://www.instagram.com/kohadanigiri/',
    alt: 'Instagram',
  },
  {
    imgUrl: githubIcon,
    link: 'https://github.com/testudonavis',
    alt: 'GitHub',
  },
];
const socialIconsStyling = 'w-8 h-8 p-1';
const emailAddress = 'contactmikepark@gmail.com';

export default function Socials() {
  return (
    <div className="flex">
      {socialIcons.map(icon => (
        <Link href={icon.link} key={icon.alt}>
          <Image src={icon.imgUrl} quality={75} className={socialIconsStyling} alt={icon.alt} />
        </Link>
      ))}
      <EmailButton emailAddress={emailAddress} imageStyle={socialIconsStyling} />
    </div>
  );
}
