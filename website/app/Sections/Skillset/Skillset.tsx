import React from 'react';

const Skillset = () => {
    return (
        <div className='items-center'>
            <h3 className='text-3xl x'>
                And, I design functionally beautiful
                <br /> applications for unique problems.
            </h3>

            <div className='mt-14'>
                <h3 className='text-lightPrimaryBlue text-3xl font-medium mb-4'>
                    My Skillset
                </h3>

                <div className='flex gap-72'>
                    <h4 className='text-4xl'>
                        Web Development,
                        <br /> Project Management,
                        <br /> &<br /> Data science
                    </h4>

                    <p className='w-[294px] h-[259px]'>
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

            <div className='grid grid-cols-3 grid-rows-1'>
                <div className='relative'>
                    <p className='absolute text-neutral-400 text-opacity-20 text-[64px] font-medium'>
                        01
                    </p>

                    <div className='relative top-8 left-4'>
                        <h4 className='text-gold text-2xl font-medium'>Design</h4>

                        <ul className='mt-8'>
                            <li>Skill</li>
                            <li>Skill</li>
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
                            <li>Skill</li>
                            <li>Skill</li>
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
                            <li>Skill</li>
                            <li>Skill</li>
                        </ul>
                    </div>
                </div>
                {/* <div className='text-neutral-400 text-opacity-20 text-[64px] font-medium'>
                    02
                </div>
                <div className='text-neutral-400 text-opacity-20 text-[64px] font-medium'>
                    03
                </div> */}
            </div>
        </div>
    );
};

export default Skillset;
