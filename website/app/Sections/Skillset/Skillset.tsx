import React from 'react';
import Image from 'next/image';
import Frame from './Components/Frame';

const Skillset = () => {
    return (
        <div className='lg:sectionContainer relative'>
            <div className='relative mb-10'>
                {/* <h3 className='font-'>Skills</h3> */}
                <Image
                    src='/Skills.svg'
                    alt='Text reading Skills'
                    width={200}
                    height={200}
                    className='absolute -top-5 -left-5 opacity-80'
                />

                <h3 className='sectionHeaderBlue'>My Skillset</h3>
            </div>

            <div className='flex flex-col gap-2 lg:flex-row'>
                <h4 className='text-neutral-50 lg:hidden flex-1 text-3xl font-semibold'>
                    Web Development, Project Management, & Data Science
                </h4>
                <h4 className='hidden text-neutral-50 lg:block flex-1 text-3xl font-semibold'>
                    Web Development,
                    <br /> Project Management,
                    <br /> &<br /> Data Science
                </h4>

                <p className='text-neutral-400 flex-1 '>
                    I'm a full stack devloper who translates data insights into valuable
                    applications. I provide effortless experiences by understanding how
                    users interact with each of my products. I'm experienced in product
                    conception, development, release, and data analytics. During college,
                    I led several teams using agile methodologies to provide real products
                    during a capstone course. I also led a small development team to
                    prototype a electronic medical record. More recently, I colaborated
                    with clients to design and deploy proof of concept website and IoT,
                    iOS application.
                    <br /> <br />
                    Simply put, I love telling a compelling story through information and
                    interfaces!
                </p>
            </div>

            <h3 className='mt-10 text-white underline-lightPrimaryBlue text-2xl font-medium underline decoration-lightPrimaryBlue underline-offset-8'>
                What I can do for you
            </h3>

            <div className='grid grid-cols-2 gap-10 text-white lg:grid-cols-4'>
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
