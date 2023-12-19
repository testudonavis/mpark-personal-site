import { Cormorant } from 'next/font/google';
import PropTypes from 'prop-types';

import '@/globals.css';

const cormorant = Cormorant({ subsets: ['latin'] });

export const metadata = {
  title: 'Mike Park',
  description: 'Personal website of Mike Park',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant.className} bg-primary-bg-2`}>{children}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
