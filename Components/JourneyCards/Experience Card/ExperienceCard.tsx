import React from 'react';

const ExperienceCard = () => {
    return (
        <div className='flex-1 p-8 drop-shadow-card bg-slate-100 rounded-md max-w-md lg:max-w-lg'>
            <div
                className='absolute -top-5 left-[50%]
                            flex justify-center items-center 
                            bg-secondaryGold text-2xl
                            rounded-full w-12 h-12'>
                2
            </div>

            <div className='journeyCardTextContainer'>
                <h3 className='journeyCardTitle'>Recent Experience</h3>

                <div>
                    <h4 className='bioCardSectionTitle'>
                        Front End Engineering Lead, Last Lock{' '}
                    </h4>
                    <p>Madison, Wi | Aug 2022 - Present</p>
                    <p>
                        I design and build the customer-facing software for our IoT locks.
                        Usability and scalability are my priority. I also interview
                        customers to improve our UX.
                    </p>
                </div>

                <div>
                    <h4 className='bioCardSectionTitle'>
                        CS Peer Mentor, University of Madison-Wisconsin{' '}
                    </h4>
                    <p>Madison, Wi | Aug 2022 - Dec 2023</p>
                    <p>Lorem Ipsum</p>
                </div>

                <div>
                    <h4 className='bioCardSectionTitle'>
                        Engineering Intern, Last Lock{' '}
                    </h4>
                    <p>Madison, Wi | May 2022 - Aug 2022</p>
                    <p>Lorem Ipsum</p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
