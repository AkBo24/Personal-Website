import React from 'react';
import Image from 'next/image';
import ExperienceSelector from './Components/ExperienceSelector';

const Career = () => {
    return (
        <div className='sectionContainer text-neutral-100'>
            {/* <h3 className='sectionHeaderBlue text-neutral-100 inline'>My Work</h3> */}
            <div className='relative mb-10'>
                {/* <h3 className='font-'>Skills</h3> */}
                <Image
                    src='/Experience.svg'
                    alt='Text reading Skills'
                    width={400}
                    height={400}
                    className='absolute -top-5 -left-5 opacity-80'
                />

                <h3 className='sectionHeaderBlue'>My Work</h3>
            </div>

            {/* <a
                href=''
                target='_blank'
                rel='noopener noreferrer'
                className='text-lg font-medium underlineLightblue ml-10 group hover:text-lightPrimaryBlue'>
                see my resume
                <img
                    src='arrowleft.svg'
                    alt='Arrow pointing left, indicating go'
                    className='inline pl-1  group-hover:translate-x-2'
                    width={20}
                />
            </a> */}

            <div className='flex'>
                <ExperienceSelector />
            </div>
        </div>
    );
};

export default Career;
