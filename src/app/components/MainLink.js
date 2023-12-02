import '@/globals.css';
import Link from 'next/link';

export default function MainLink({route}) {
    return (
        <div className="text-secondary-text text-center text-xl p-2 hover:after:content-['*'] hover:before:content-['*']">
            <Link href={`/${route}`}> {route} </Link>
        </div>
    )
}
