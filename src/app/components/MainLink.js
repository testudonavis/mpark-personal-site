import '@/globals.css';
import Link from 'next/link';

export default function MainLink({route, styleOverride, name}) {
    const style = styleOverride || "text-secondary-text text-center text-xl p-2 hover:after:content-['*'] hover:before:content-['*']"
    return (
        <div className={style}>
            <Link href={`/${route}`}> {name || route} </Link>
        </div>
    )
}
