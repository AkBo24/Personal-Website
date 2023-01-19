import React from 'react';

const Footer = () => {
    return (
        <div className='bg-lightGreen mt-10 p-10'>
            <div className='mb-10'>
                <h3 className='text-primaryBlue text-5xl mb-2'>My Links</h3>
                <a
                    href='https://github.com/AkBo24'
                    className='block text-gray-800 text-2xl mb-2 cursor-pointer hover:underline hover:underline-offset-2'>
                    Github
                </a>
                <a
                    href='https://github.com/AkBo24'
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
