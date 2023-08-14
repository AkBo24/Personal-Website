import Image from 'next/image';
import Landing from './Sections/Landing/Landing';

export default function Home() {
    return (
        <main className='flex flex-col min-h-screen items-center justify-between p-24'>
            <Landing />
        </main>
    );
}
