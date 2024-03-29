import Landing from './Sections/Landing/Landing';
import Skillset from './Sections/Skillset/Skillset';
import About from './Sections/About/About';
import Career from './Sections/Career/Career';
import Footer from './Sections/Footer/Footer';
import Navbar from './Sections/Navbar/Navbar';
import Projects from './Sections/Projects/Projects';

export default function Home() {
    return (
        <div className=''>
            <Navbar />
            <main className='flex flex-col gap-28 min-h-screen lg:items-center p-10 lg:gap-64 lg:px-24 lg:pb-24 text-secondaryText font-inter'>
                <Landing />
                <Skillset />
                <Career />
                <Projects />
                <About />
            </main>
            <Footer />
        </div>
    );
}
