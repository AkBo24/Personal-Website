import React from 'react';

const Career = () => {
    return (
        <div className='sectionContainer text-neutral-100'>
            <h3 className='sectionHeaderBlue text-neutral-100 inline'>My Career</h3>

            <a
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
            </a>

            <h3 className='sectionSecondaryHeaderBlue mt-8'>Education</h3>
            <div className='pl-4 mb-10 '>
                {/* <div className='w-2.5 h-px origin-top-left -rotate-90 bg-lightPrimaryBlue rounded-[1px] ' /> */}
                <h4 className='careerTitle'>University of Wisconsin-Madison</h4>
                <p className='text-neutral-400 pl-3'>Sept 2019 - May 2023</p>
                <p className='pl-3 text-neutral-200'>
                    Double major in Computer and Data Science
                </p>
            </div>

            <h3 className='sectionSecondaryHeaderBlue'>Experiences</h3>
            <div className='mb-10 grid max-md:grid-flow-row max-lg:gap-9 lg:grid-cols-2'>
                <div className='pl-3'>
                    {/* <div className='w-2.5 h-px origin-top-left -rotate-90 bg-lightPrimaryBlue rounded-[1px] ' /> */}
                    <h4 className='careerTitle'>Last Lock</h4>
                    <p className='text-neutral-400 pl-3'>June 2022 - Aug 2023</p>
                    <p className='text-neutral-200 pl-3'>
                        Lead Software Engineer <br /> Frontend Engineering Lead
                    </p>
                </div>

                <div className='text-neutral-200 pl-4'>
                    {/* <div className='w-2.5 h-px origin-top-left -rotate-90 bg-lightPrimaryBlue rounded-[1px] ' /> */}
                    <h4 className='careerTitle'>CS Capstone Peer Mentor</h4>
                    <p className='text-neutral-400 pl-3'>June 2022 - Aug 2023</p>
                    <p className='pl-3'>Leveraged Skills: Scrum & Product Manager</p>
                </div>
            </div>

            <h3 className='sectionSecondaryHeaderBlue'>Projects</h3>
            <div className='mb-10 grid max-lg:grid-flow-row max-lg:gap-9 lg:grid-cols-2'>
                <div className='pl-3'>
                    {/* <div className='w-2.5 h-px origin-top-left -rotate-90 bg-lightPrimaryBlue rounded-[1px] ' /> */}
                    <h4 className='careerTitle'>Better Living Through Correlation</h4>
                    {/* <p className='text-gray-400 pl-4'>June 2022 - Aug 2023</p>
                    <p className='pl-4'>
                        Lead Software Engineer <br /> Frontend Engineering Lead
                    </p> */}
                </div>

                <div className='pl-3'>
                    {/* <div className='w-2.5 h-px origin-top-left -rotate-90 bg-lightPrimaryBlue rounded-[1px] ' /> */}
                    <h4 className='careerTitle'>Web based EMR</h4>
                    {/* <p className='text-gray-400 pl-4'>June 2022 - Aug 2023</p>
                    <p className='pl-4'>Leveraged Skills: Scrum & Product Manager</p> */}
                </div>
            </div>

            <h3 className='sectionSecondaryHeaderBlue'>Certifications</h3>
            <div className='pl-3'>
                {/* <div className='w-2.5 h-px origin-top-left -rotate-90 bg-lightPrimaryBlue rounded-[1px] ' /> */}
                <h4 className='careerTitle'>Certified ScrumMaster® (CSM®)</h4>
                <p className='text-neutral-400 pl-4'>June 2022 - June 2024</p>
                {/* <p className='pl-4'>Double major in Computer and Data Science</p> */}
            </div>
        </div>
    );
};

export default Career;
