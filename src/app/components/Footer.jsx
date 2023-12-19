import '@/globals.css';
import Socials from './Socials';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center pb-2 pt-10 sm:pt-10 sm:pb-1 sm:pr-10 sm:pl-10 text-tertiary-text">
      <Socials />
      <p>© 2023. michael park</p>
    </footer>
  );
}
