import React from 'react';
import PictureOfMe from '../PictureOfMe/PictureOfMe';

const HeroSection = () => {
    return (
        <div className='pl-4 text-slate-100'>
            <h1 className=' text-6xl'>
                Hey :) I&apos;m <br /> Akshay Bodla
            </h1>

            <h2 className='text-lightGreen text-3xl'>
                Developer, Designer, & Infinite Learner
            </h2>

            <PictureOfMe />

            <p className='text-lg'>
                I’m a senior Computer Science and Data Science at the University of
                Wisconsin-Madison. I’m interested in Full stack development security, and
                UI/UX design.{' '}
                <span className='font-semibold'>
                    I love to learn and I especially love what I do.
                </span>
            </p>
        </div>
    );
};

export default HeroSection;
