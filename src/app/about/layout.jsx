import PropTypes from 'prop-types';

import SubPageLayout from '@/components/SubPageLayout';

export const metadata = {
  title: 'Mike Park',
  description: 'Personal website of Mike Park',
};

export default function AboutLayout({ children }) {
  return <SubPageLayout>{children}</SubPageLayout>;
}

AboutLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
