'use client';
import { useState } from 'react';
import Image from 'next/image';
import ExperienceSelector from './Components/ExperienceSelector';
import ExperienceBody from './Components/ExperienceBody';
import experiences from './ExperienceData';
import SmExperience from './Components/SmExperience';

const Career = () => {
    const [activeExperienceKey, setActiveExperienceKey] = useState<number>(0);
    const updateActiveExperience = (key: number): void => setActiveExperienceKey(key);

    return (
        <div className='lg:sectionContainer text-neutral-100'>
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

            <div className='md:hidden'>
                <SmExperience />
            </div>

            <div className='hidden md:flex gap-10'>
                <ExperienceSelector
                    activeExperience={activeExperienceKey}
                    updateActiveExperience={updateActiveExperience}
                />
                <ExperienceBody activeExperience={experiences[activeExperienceKey]} />
            </div>
        </div>
    );
};

export default Career;
