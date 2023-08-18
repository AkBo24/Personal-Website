import Image from 'next/image';
import Landing from './Sections/Landing/Landing';
import Skillset from './Sections/Skillset/Skillset';

export default function Home() {
    return (
        <main className='flex flex-col gap-32 min-h-screen items-center justify-between p-24'>
            <Landing />
            <Skillset />
        </main>
    );
}
