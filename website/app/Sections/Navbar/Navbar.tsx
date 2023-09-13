import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className='text-3xl mt-4 text-neutral-50 absolute left-10 border-2 border-neutral-100 w-14 h-14 rounded-sm flex justify-center items-center'>
                <h2>A</h2>
                <div className='-z-10 absolute w-14 h-14 bg-mint/30 -right-2 -bottom-2 rounded-sm'></div>
            </div>
            <nav className='hidden md:flex fixed right-0 text-lg pt-8 pr-10 font-bold text-lightPrimaryBlue gap-8 z-20'>
                <a href='#landing' className='navLink group'>
                    Home
                    <span className='navUnderline' />
                </a>
                <a href='#skill' className='navLink group'>
                    Skills
                    <span className='navUnderline' />
                </a>
                <a href='#experience' className='navLink group'>
                    Experience
                    <span className='navUnderline' />
                </a>
                <a href='#projects' className='navLink group'>
                    Projects
                    <span className='navUnderline' />
                </a>
                <a href='#about' className='navLink group'>
                    About
                    <span className='navUnderline' />
                </a>
            </nav>
        </>
    );
};

export default Navbar;
