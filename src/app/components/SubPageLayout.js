import '@/globals.css';
import Header from './Header';
import Footer from './Footer';
import BackHomeButton from './BackHomeButton';

export const metadata = {
  title: 'Mike Park',
  description: 'Personal website of Mike Park',
}

const SubPageLayout = ({ children, layoutProps }) => {
    return (
        <main>
            {/* <BackHomeButton /> */}
            <Header />
            {children}
            <Footer />
        </main>
    );
};

export default SubPageLayout;
