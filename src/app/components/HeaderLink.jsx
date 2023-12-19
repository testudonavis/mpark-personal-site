import PropTypes from 'prop-types';

import '@/globals.css';
import MainLink from './MainLink';

export default function HeaderLink({ route, currPath, name = '' }) {
  const style = currPath.includes(route)
    ? 'text-prim-text-2 font-bold text-center text-xl p-2'
    : 'text-secondary-text text-center text-xl p-2 hover:underline hover:text-secondary-text';
  return <MainLink route={route} styleOverride={style} name={name} />;
}

HeaderLink.propTypes = {
  route: PropTypes.string.isRequired,
  currPath: PropTypes.string.isRequired,
  name: PropTypes.string,
};
