import React from 'react';
import Image from 'next/image';
import Project from './Components/Project';

const Projects = () => {
    return (
        <div className='lg:sectionContainer scroll-m-10' id='projects'>
            {' '}
            <div className='relative mb-10'>
                {/* <h3 className='font-'>Skills</h3> */}
                <Image
                    src='/Projects!.svg'
                    alt='Text reading Skills'
                    width={400}
                    height={400}
                    className='absolute -top-5 md:-top-8 -left-5 opacity-80 -z-10'
                />

                <h3 className='sectionHeaderBlue'>Cool Things I've Built</h3>
            </div>
            <p className='text-lg'>
                I continuously explore new tools and ideas. This section is still under
                development, so come back to see what I've been upto and find links to
                featured projects.
            </p>
            <div className='pt-10 grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-5'>
                <Project
                    title='Better Living Through Correlation'
                    details='A hybrid lifestyle app for visualizing how your daily habits correlate with one another. Built for my CS Capstone.'
                    skills={['React Native', 'Firebase', 'Scrum', 'Jira']}
                />

                <Project
                    title='Imhotech - Web Based EMR'
                    details='An electronic medical record system for South African hospitals to maintain records. I acted as a lead engineer for a small team.'
                    skills={['React', 'AWS', 'Project Management']}
                />
            </div>
        </div>
    );
};

export default Projects;
