import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className='text-3xl mt-4 text-neutral-50 absolute left-10 border-2 border-neutral-100 w-14 h-14 rounded-sm flex justify-center items-center'>
                <h2>A</h2>
                <div className='-z-10 absolute w-14 h-14 bg-mint/25 -right-2 -bottom-2 rounded-sm'></div>
            </div>
            <nav className='fixed right-0 text-lg pt-8 pr-10 font-bold text-lightPrimaryBlue flex gap-8 z-20'>
                <a
                    href='#landing'
                    className='text-gold underline underline-offset-4 decoration-gold'>
                    Home
                </a>

                <a href='#skill' className=' group hover:text-lightPrimaryBlue'>
                    Skills
                    {/* <img
                        src='arrowleft.svg'
                        alt='Arrow pointing left, indicating go'
                        className='hidden group-hover:pl-1 group-hover:inline'
                        width={20}
                    /> */}
                </a>

                <a href='#experience' className='group hover:text-lightPrimaryBlue'>
                    Experience
                </a>

                <a href='#projects' className='group hover:text-lightPrimaryBlue'>
                    Projects
                </a>

                <a href='#about' className=' group hover:text-lightPrimaryBlue'>
                    About
                </a>
            </nav>
        </>
    );
};

export default Navbar;
