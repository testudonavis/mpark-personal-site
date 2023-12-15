import '@/globals.css';
import Header from './Header';
import Footer from './Footer';

export const metadata = {
  title: 'Mike Park',
  description: 'Personal website of Mike Park',
}

const SubPageLayout = ({ children, layoutProps }) => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header />
                    <main className="flex grow">
                        {children}
                    </main>
                <Footer />
            </div>
        </>
    );
};

export default SubPageLayout;
