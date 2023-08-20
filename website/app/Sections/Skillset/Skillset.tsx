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
                <div className='absolute -top-10 -left-10 -z-10'>
                    <Frame />
                </div>
                <h3 className='sectionHeaderBlue'>My Skillset</h3>

                <div className='flex'>
                    <h4 className='flex-1 text-3xl font-semibold'>
                        Web Development,
                        <br /> Project Management,
                        <br /> &<br /> Data Science
                    </h4>
                    {/* An enthusiastic product designer currently shaping the future of
                    software development by designing smooth user-interfaces that promote
                    user interaction with information and data. While traveling around the
                    world. */}
                    {/* I specialize in building complex web applications, leading front-end
                    teams, digital product design and developing visual design systems. I
                    enjoy creating effortless user experience and designing delightful
                    digital products. The entire process of going from a concept to
                    release and gathering user’s feedback on either client’s or my own
                    products is what makes me wake up everyday! I worked with numerous
                    clients from all around the world from early startups to
                    well-established companies. I always seek new opportunities for
                    cooperation on projects around interesting dashboards, design systems
                    or landing pages. Let’s create something awesome together! */}

                    <p className='text-neutral-400 flex-1 '>
                        I'm a full stack devloper who translates data insights into
                        valuable applications. I provide effortless experiences by
                        understanding how users interact with each of my products. I'm
                        experienced in product conception, development, release, and data
                        analytics. During college, I led several teams using agile
                        methodologies to provide real products during a capstone course. I
                        also led a small development team to prototype a electronic
                        medical record. More recently, I colaborated with clients to
                        design and deploy proof of concept website and IoT, iOS
                        application.
                        <br /> <br />
                        Simply put, I love telling a compelling story through information
                        and interfaces!
                    </p>
                </div>
            </div>

            <h3 className='mt-10 underline-lightPrimaryBlue text-2xl font-medium underline decoration-lightPrimaryBlue underline-offset-8'>
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
