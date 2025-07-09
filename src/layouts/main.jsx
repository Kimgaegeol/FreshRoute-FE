import Header from '../components/mainLayout/header';
import Nav from '../components/mainLayout/nav';
import Footer from '../components/mainLayout/footer';

function MainLayout({ children }) {
    return ( 
        <div>
            <Header />
            <Nav />
            <main className='container mx-auto pt-10 pb-20 px-14'>
                {children}
            </main>
            <Footer />
        </div>
     );
}

export default MainLayout;