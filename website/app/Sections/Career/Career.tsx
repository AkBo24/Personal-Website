import React from 'react';

const Career = () => {
    return (
        <div className='sectionContainer'>
            <h3 className='sectionHeaderBlue text-white inline'>My Career</h3>

            <a
                href=''
                target='_blank'
                rel='noopener noreferrer'
                className='text-lg font-medium underlineLightblue mr-4'>
                see my resume
            </a>

            <h3 className='sectionSecondaryHeaderBlue m-0'>Education</h3>
            <div className='pl-4'>
                {/* <div className='w-2.5 h-px origin-top-left -rotate-90 bg-lightPrimaryBlue rounded-[1px] ' /> */}
                <h4 className='text-white text-xl font-bold border-l-lightPrimaryBlue border-l-[1px] pl-3 h-3 leading-[11px]'>
                    University of Wisconsin-Madison
                </h4>
                <p className='text-gray-400 pl-4'>Sept 2019 - May 2023</p>
                <p className='pl-4'>Double major in Computer and Data Science</p>
            </div>

            <h3 className='sectionSecondaryHeaderBlue'>Experiences</h3>
            <div className='flex'>
                <div className='pl-4'>
                    {/* <div className='w-2.5 h-px origin-top-left -rotate-90 bg-lightPrimaryBlue rounded-[1px] ' /> */}
                    <h4 className='text-white text-xl font-bold border-l-lightPrimaryBlue border-l-[1px] pl-3 h-3 leading-[11px]'>
                        Last Lock
                    </h4>
                    <p className='text-gray-400 pl-4'>June 2022 - Aug 2023</p>
                    <p className='pl-4'>
                        Lead Software Engineer <br /> Frontend Engineering Lead
                    </p>
                </div>

                <div className='pl-4'>
                    {/* <div className='w-2.5 h-px origin-top-left -rotate-90 bg-lightPrimaryBlue rounded-[1px] ' /> */}
                    <h4 className='text-white text-xl font-bold border-l-lightPrimaryBlue border-l-[1px] pl-3 h-3 leading-[11px]'>
                        CS Capstone Peer Mentor
                    </h4>
                    <p className='text-gray-400 pl-4'>June 2022 - Aug 2023</p>
                    <p className='pl-4'>Leveraged Skills: Scrum & Product Manager</p>
                </div>
            </div>

            <h3 className='sectionSecondaryHeaderBlue'>Projects</h3>
            <div className='flex'>
                <div className='pl-4'>
                    {/* <div className='w-2.5 h-px origin-top-left -rotate-90 bg-lightPrimaryBlue rounded-[1px] ' /> */}
                    <h4 className='text-white text-xl font-bold border-l-lightPrimaryBlue border-l-[1px] pl-3 h-3 leading-[11px]'>
                        Better Living Through Correlation
                    </h4>
                    {/* <p className='text-gray-400 pl-4'>June 2022 - Aug 2023</p>
                    <p className='pl-4'>
                        Lead Software Engineer <br /> Frontend Engineering Lead
                    </p> */}
                </div>

                <div className='pl-4'>
                    {/* <div className='w-2.5 h-px origin-top-left -rotate-90 bg-lightPrimaryBlue rounded-[1px] ' /> */}
                    <h4 className='text-white text-xl font-bold border-l-lightPrimaryBlue border-l-[1px] pl-3 h-3 leading-[11px]'>
                        Web based EMR
                    </h4>
                    {/* <p className='text-gray-400 pl-4'>June 2022 - Aug 2023</p>
                    <p className='pl-4'>Leveraged Skills: Scrum & Product Manager</p> */}
                </div>
            </div>

            <h3 className='sectionSecondaryHeaderBlue m-0'>Certifications</h3>
            <div className='pl-4'>
                {/* <div className='w-2.5 h-px origin-top-left -rotate-90 bg-lightPrimaryBlue rounded-[1px] ' /> */}
                <h4 className='text-white text-xl font-bold border-l-lightPrimaryBlue border-l-[1px] pl-3 h-3 leading-[11px]'>
                    Certified ScrumMaster® (CSM®)
                </h4>
                <p className='text-gray-400 pl-4'>June 2022 - June 2024</p>
                {/* <p className='pl-4'>Double major in Computer and Data Science</p> */}
            </div>
        </div>
    );
};

export default Career;
