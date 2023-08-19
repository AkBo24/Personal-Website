import React from 'react';

const Navbar = () => {
    return (
        <nav className='fixed right-0 text-xl pt-8 pr-10 font-bold'>
            <a
                href='./'
                className='text-gold underline underline-offset-4 decoration-gold mr-10'>
                Info
            </a>

            <a
                href='/css/'
                className='text-neutral-300 group hover:text-lightPrimaryBlue'>
                Resume
                <img
                    src='arrowleft.svg'
                    alt='Arrow pointing left, indicating go'
                    className='hidden group-hover:pl-1 group-hover:inline'
                    width={20}
                />
            </a>
        </nav>
    );
};

export default Navbar;
