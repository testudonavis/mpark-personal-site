import { JetBrains_Mono as JetBrainsMono } from 'next/font/google';
import PropTypes from 'prop-types';

export const metadata = {
  title: 'Mike Park',
  description: 'Personal website of Mike Park',
};

const jetbrains = JetBrainsMono({ subsets: ['latin'] });

export default function ProjectLayout({ children }) {
  return (
    <div className="w-11/12 mx-auto">
      <div
        className={`${jetbrains.className} relative shadow-lg after:shadow-inner2 after:border-4 after:border-pic-frame after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 w-full h-full p-4 after:pointer-events-none`}
      >
        {children}
      </div>
    </div>
  );
}

ProjectLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
