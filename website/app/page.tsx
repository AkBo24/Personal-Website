import Image from 'next/image';
import Landing from './Sections/Landing/Landing';
import Skillset from './Sections/Skillset/Skillset';
import About from './Sections/About/About';
import Career from './Sections/Career/Career';
import Footer from './Sections/Footer/Footer';
import Navbar from './Sections/Navbar/Navbar';

export default function Home() {
    return (
        <div className='bg-black'>
            <Navbar />
            <main className='flex flex-col gap-64 min-h-screen items-center p-24 text-neutral-100'>
                <Landing />
                <Skillset />
                <Career />
                <About />
            </main>
            <Footer />
        </div>
    );
}
