import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';

const NavBar = () => {
    return (
        <div className='absolute w-full flex p-4'>
            <p className='mr-auto'>A</p>

            <div className='md:invisible ml-auto cursor-pointer'>
                <RxHamburgerMenu size={30} />
            </div>

            <div className='hidden md:visible md:flex gap-4'>
                <Link href='/'>Home</Link>
                <Link href='/'>Resume</Link>
            </div>
        </div>
    );
};

export default NavBar;
