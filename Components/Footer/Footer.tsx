import React from 'react';

const Footer = () => {
    return (
        <div className='bg-lightGreen mt-20 p-10 flex flex-col'>
            <div className='z-10 self-center drop-shadow-card -mt-20 bg-[#151D3A] rounded p-5 px-20 text-center'>
                <p className='text-slate-100 text-2xl'>
                    Thanks for visiting. Want to reach out?
                </p>
            </div>
            <div className='mb-10'>
                <h3 className='text-primaryBlue text-5xl mb-2'>My Links</h3>
                <a
                    href='https://github.com/AkBo24'
                    className='block text-gray-800 text-2xl mb-2 cursor-pointer hover:underline hover:underline-offset-2'>
                    Github
                </a>
                <a
                    href='https://www.linkedin.com/in/akshay-bodla/'
                    className='block text-gray-800 text-2xl mb-2 cursor-pointer hover:underline hover:underline-offset-2'>
                    Linkedin
                </a>
            </div>
            <div className='mb-5'>
                <h3 className='text-primaryBlue text-5xl mb-2'>Say Hello</h3>
                <h4 className='text-gray-800 text-2xl mb-2'>akshaybodla21@gmail.com</h4>
            </div>
            <div className='w-full h-[1px] bg-primaryBlue'>© Akshay Bodla 2023</div>{' '}
        </div>
    );
};

export default Footer;
