'use client';

import { usePathname } from 'next/navigation';

import '@/globals.css';
import { mainLinks } from '@/lib/config';
import HeaderLink from './HeaderLink';
import BackHomeButton from './BackHomeButton';

export default function Header() {
    const pathname = usePathname();
    return (
        <>
            <header className="flex flex-row items-center justify-between pl-10 pr-10 pb-2 pt-2">
                <BackHomeButton />
                <div className="flex text-secondary-text grow justify-center mr-8">
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
            </header>
        </>
    );
}
