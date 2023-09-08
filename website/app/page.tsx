import Landing from './Sections/Landing/Landing';
import Skillset from './Sections/Skillset/Skillset';
import About from './Sections/About/About';
import Career from './Sections/Career/Career';
import Footer from './Sections/Footer/Footer';
import Navbar from './Sections/Navbar/Navbar';

export default function Home() {
    return (
        <div className=''>
            <Navbar />
            <main className='flex flex-col gap-28 min-h-screen lg:items-center lg:gap-64 lg:p-24 text-neutral-100'>
                <Landing />
                <Skillset />
                <Career />
                <About />
            </main>
            <Footer />
        </div>
    );
}
