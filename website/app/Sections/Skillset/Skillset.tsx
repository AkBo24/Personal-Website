import React from 'react';
import Frame from './Components/Frame';

const Skillset = () => {
    return (
        <div className='items-center sectionContainer relative'>
            <h3 className='text-3xl mb-32'>
                I design functionally beautiful applications
                <br /> from meaningful data insights.
            </h3>

            <div className='relative'>
                <div className='absolute -top-10 -left-10'>
                    <Frame />
                </div>
                <h3 className='sectionHeaderBlue'>My Skillset</h3>

                <div className='flex'>
                    <h4 className='flex-1 text-3xl'>
                        Web Development,
                        <br /> Project Management,
                        <br /> &<br /> Data Science
                    </h4>

                    <p className='text-neutral-400 flex-1 h-[259px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    </p>
                </div>
            </div>

            <h3 className='underline-lightPrimaryBlue text-2xl font-medium underline decoration-lightPrimaryBlue underline-offset-8'>
                What I can do for you
            </h3>

            <div className='grid grid-cols-4 gap-4'>
                <div className='relative'>
                    <p className='absolute text-neutral-400 text-opacity-20 text-[64px] font-medium'>
                        01
                    </p>

                    <div className='relative top-8 left-4'>
                        <h4 className='text-gold text-2xl font-medium'>Design</h4>

                        <ul className='mt-8'>
                            <li className='mb-4'>Prototyping & wireframing </li>
                            <li className='mb-4'>User flows & mockups</li>
                            <li>User research & usability testing</li>
                        </ul>
                    </div>
                </div>

                <div className='relative'>
                    <p className='absolute text-neutral-400 text-opacity-20 text-[64px] font-medium'>
                        02
                    </p>

                    <div className='relative top-8 left-4'>
                        <h4 className='text-gold text-2xl font-medium'>Engineer</h4>

                        <ul className='mt-8'>
                            <li className='mb-4'>Mobile & Web Applications</li>
                            <li className='mb-4'>Data Pipelines</li>
                            <li className='mb-4'>Databases</li>
                        </ul>
                    </div>
                </div>

                <div className='relative'>
                    <p className='absolute text-neutral-400 text-opacity-20 text-[64px] font-medium'>
                        03
                    </p>

                    <div className='relative top-8 left-4'>
                        <h4 className='text-gold text-2xl font-medium'>Analyze</h4>

                        <ul className='mt-8'>
                            <li className='mb-4'>Data Visulalization</li>
                            <li className='mb-4'>Data Wrangling</li>
                            <li className='mb-4'>Cloud Computing</li>
                        </ul>
                    </div>
                </div>

                <div className='relative'>
                    <p className='absolute text-neutral-400 text-opacity-20 text-[64px] font-medium'>
                        04
                    </p>

                    <div className='relative top-8 left-4'>
                        <h4 className='text-gold text-2xl font-medium'>Lead</h4>

                        <ul className='mt-8'>
                            <li className='mb-4'>Agile & Scrum</li>
                            <li className='mb-4'>Project Management</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skillset;
