import '@/globals.css';
import Link from 'next/link';

export default function MainLink({route, styleOverride, name}) {
    const hoverStyle = "hover:font-bold"
    const style = styleOverride || `text-secondary-text text-center text-xl p-2 ${hoverStyle}`
    return (
        <div className={style}>
            <Link href={`/${route}`}> {name || route} </Link>
        </div>
    )
}
