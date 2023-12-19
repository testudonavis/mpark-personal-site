import PropTypes from 'prop-types';

import '@/globals.css';
import Link from 'next/link';

export default function MainLink({ route, styleOverride = '', name = '' }) {
  const hoverStyle = 'hover:font-bold';
  const style = styleOverride || `text-secondary-text text-center text-xl p-2 ${hoverStyle}`;
  return (
    <div className={style}>
      <Link href={`/${route}`}> {name || route} </Link>
    </div>
  );
}

MainLink.propTypes = {
  route: PropTypes.string.isRequired,
  styleOverride: PropTypes.string,
  name: PropTypes.string,
};
