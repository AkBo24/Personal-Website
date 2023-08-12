import React from 'react';

const EducationCard = () => {
    return (
        <div className='flex-1 p-8 drop-shadow-card bg-slate-100 rounded-md max-w-md lg:max-w-lg'>
            <div
                className='absolute -top-5 -left-5 
                            flex justify-center items-center 
                            bg-secondaryGold text-2xl
                            rounded-full w-12 h-12'>
                1
            </div>

            <div className='journeyCardTextContainer'>
                <h3 className='journeyCardTitle'>Education</h3>

                <div>
                    <h4 className='bioCardSectionTitle'>
                        University of Wisconsin-Madison
                    </h4>
                    <p>Bachelor of Science, May 2023 </p>
                    <p>Double Major in Computer Science and Data Science</p>
                </div>

                <div>
                    <h4 className='bioCardSectionTitle'>Relevant Coursework:</h4>
                    <p className='mb-3'>
                        Some of my favorite technical courses at Madison include{' '}
                        <span className='font-semibold'>
                            Capstone, Software Security, Operating Systems, and Databases.
                        </span>
                    </p>

                    <p>
                        I also loved my classes in{' '}
                        <span className='font-semibold'>
                            African-American Hip Hop and Government Leadership!{' '}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EducationCard;
