import React from 'react';

const EducationCard = () => {
    return (
        <div className='flex-1 py-8 px-10 drop-shadow-card bg-slate-100 rounded-md max-w-md'>
            <div
                className='absolute -top-5 -left-5 
                            flex justify-center items-center 
                            bg-secondaryGold text-2xl
                            rounded-full w-12 h-12'>
                1
            </div>

            <div className='grid gap-6'>
                <div>
                    <h3 className='bioCardTitle'>UI/UX Developer</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris{' '}
                    </p>
                </div>

                <div>
                    <h4 className='bioCardSectionTitle'>Here's what I can do...</h4>
                    <ul className='list-disc list-inside'>
                        <li>Design elegant UI,UX, Web and mobile Apps</li>
                        <li>Learn and research algorithms and their data inputs</li>
                    </ul>
                </div>

                <div>
                    <h4 className='bioCardSectionTitle'>Frameworks I Build With:</h4>
                    <p>One, Two, Three</p>
                </div>

                <div>
                    <h4 className='bioCardSectionTitle'>Design Tools:</h4>
                    <p>One, Two, Three</p>
                </div>
            </div>
        </div>
    );
};

export default EducationCard;
