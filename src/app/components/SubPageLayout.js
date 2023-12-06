import '@/globals.css';
import Header from './Header';
import Footer from './Footer';

export const metadata = {
  title: 'Mike Park',
  description: 'Personal website of Mike Park',
}

const SubPageLayout = ({ children, layoutProps }) => {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    );
};

export default SubPageLayout;
