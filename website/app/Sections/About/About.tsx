import React from 'react';
import Grid from '../Landing/components/Grid/Grid';

const About = () => {
    return (
        <div className='relative'>
            <div className='absolute -top-10 -left-36'>
                <Grid />
            </div>

            <div className='absolute -bottom-5 -right-36'>
                <Grid />
            </div>
            <div className=' relative sectionContainer'>
                <h3 className='sectionHeaderBlue'>About me</h3>

                <h4 className='text-4xl my-10'>
                    I’m passionate about problem solving and ideation.
                </h4>

                <p className='text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris
                </p>

                <h3 className='sectionHeaderBlue mt-10'>Links</h3>

                <a
                    href='https://github.com/AkBo24'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-2xl font-medium underlineLightblue mr-4'>
                    Github
                </a>
                <a
                    href='https://github.com/AkBo24'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-2xl font-medium underlineLightblue'>
                    LinkedIn
                </a>
            </div>
        </div>
    );
};

export default About;
