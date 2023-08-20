import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-neutral-900 w-full px-24 pt-10 pb-3 flex flex-col '>
            <div className='sectionContainer self-center mb-4'>
                <h1 className='text-gold text-xl font-medium mb-4'>
                    Thanks for visiting.
                </h1>

                <h2 className='text-lg font-medium'>Akshay Bodla —</h2>
                <p className='mb-4 text-neutral-300'>
                    Engineer, Product Manager, Data Scientist
                </p>

                <h2 className='text-lg font-medium'>Say Hello —</h2>
                <p className='text-neutral-300 mb-4'>akshaybodla21@gmail.com</p>
                <p className='text-neutral-500'>Made by me.</p>
            </div>
        </footer>
    );
};

export default Footer;
