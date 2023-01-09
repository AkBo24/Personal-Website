import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import NavBar from '../Components/NavBar/NavBar';
import HomePage from '../Components/Home/HomePage';
import Footer from '../Components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <div>
            <Head>
                <title>Akshay&apos;s Website</title>
                <meta name='description' content='All about me!' />
            </Head>

            <NavBar />
            <main>
                <HomePage></HomePage>
            </main>
            <Footer />
        </div>
    );
}
