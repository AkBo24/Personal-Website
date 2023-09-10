import React from 'react';
import Grid from '../Landing/components/Grid/Grid';
import ImageArrow from '../Components/ImageArrow/ImageArrow';

const About = () => {
    return (
        <div className='relative'>
            <div className='hidden lg:block absolute -top-10 -left-36'>
                <Grid />
            </div>

            <div className='hidden lg:block absolute -bottom-5 -right-36'>
                <Grid />
            </div>
            <div className='relative sectionContainer'>
                <h3 className='sectionHeaderBlue'>About me</h3>

                <div className='grid gap-6 grid-flow-row lg:grid-cols-2'>
                    <h4 className='text-white text-3xl font-semibold'>
                        Tough problems inspire me to ideate and build.
                    </h4>

                    <p className='text-neutral-400'>
                        I'm a devloper with an interest in bytes and a lot of other
                        things. I got started with computer science in 8th grade when I
                        took a graphic and (a very introductory) web design course. My
                        interest in CS continued into high school where I joined and
                        eventually led a FRC team. I became a full-fledged programmer in
                        Operating Systems by experiencing my first C{' '}
                        <span className='text-red-500 font-bold'>seg-fault</span> (oh the
                        horror)... <br /> <br />
                        Now, I spend my time learning new technologies and building cool
                        projects. Check back to learn more about them! When I'm not
                        playing with pixels and bytes, you can find me hiking, hanging out
                        with friends, or generally enjoying my time.
                        <br /> <br />
                        If you'd like to work with me, please reach out.
                    </p>
                </div>

                <h3 className='sectionHeaderBlue mt-10'>Links</h3>

                <a
                    href='https://github.com/AkBo24'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-2xl text-neutral-200 font-medium underlineLightblue block mb-4 sm:inline sm:mr-10 group hover:text-lightPrimaryBlue'>
                    Github
                    <ImageArrow />
                </a>
                <a
                    href='https://www.linkedin.com/in/akshay-bodla/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-2xl text-neutral-200 font-medium underlineLightblue group  hover:text-lightPrimaryBlue'>
                    LinkedIn
                    <ImageArrow />
                </a>
            </div>
        </div>
    );
};

export default About;
