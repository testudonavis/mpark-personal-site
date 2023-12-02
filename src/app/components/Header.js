'use client';

import { usePathname } from 'next/navigation';

import '@/globals.css';
import { mainLinks } from '@/lib/config';
import HeaderLink from './HeaderLink';

export default function Header() {
    const pathname = usePathname();

    return (
        <>
            <div className="flex flex-row items-center pl-10 pr-10 pb-10 text-secondary-text">
                {
                    mainLinks.map(mainLink => {
                        return (
                            <HeaderLink
                                key={mainLink.route}
                                route={mainLink.route}
                                currPath={pathname}
                            />
                        )
                    })
                }
            </div>
        </>
    );
}
