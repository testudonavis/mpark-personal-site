import '@/globals.css';
import Socials from './Socials';

export default function Footer() {
    return (
        <footer className="flex flex-col items-center p-2 sm:pt-5 sm:pb-5 sm:pr-10 sm:pl-10 text-tertiary-text">
            <Socials />
            <p>© 2023. michael park</p>
        </footer>
    )
}
