import React from 'react';

const Icon = () => (
    <svg
        width='92'
        height='92'
        viewBox='0 0 92 92'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M46 0C33.8 -1.45483e-07 22.0998 4.84641 13.4731 13.4731C4.84642 22.0998 1.06655e-06 33.8 0 46C-1.06655e-06 58.2 4.84641 69.9002 13.4731 78.5269C22.0998 87.1536 33.8 92 46 92L46 46L46 0Z'
            fill='#50C878'
        />
        <rect
            x='18.5'
            y='20.5'
            width='57'
            height='52'
            rx='3.5'
            stroke='black'
            stroke-width='3'
        />
        <path d='M19 31.5H75.5' stroke='black' stroke-width='3' />
        <path
            d='M41.0602 53.0919C41.646 52.5061 41.646 51.5564 41.0602 50.9706L31.5142 41.4246C30.9284 40.8389 29.9787 40.8389 29.3929 41.4246C28.8071 42.0104 28.8071 42.9602 29.3929 43.546L37.8782 52.0312L29.3929 60.5165C28.8071 61.1023 28.8071 62.0521 29.3929 62.6379C29.9787 63.2236 30.9284 63.2236 31.5142 62.6379L41.0602 53.0919ZM38.9995 53.5312H39.9995V50.5312H38.9995V53.5312Z'
            fill='black'
        />
        <rect x='52' y='59' width='18' height='4' rx='2' fill='black' />
    </svg>
);
const BioEngineeringCard = () => {
    return (
        <div className='flex-1 py-8 px-10 drop-shadow-card bg-slate-100 rounded-md max-w-lg'>
            <div className='flex justify-center mb-10 rounded-full'>
                <Icon />
            </div>

            <div className='grid gap-6'>
                <div>
                    <h3 className='bioCardTitle'>Software and Data Engineer</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris{' '}
                    </p>
                </div>

                <div>
                    <h4 className='bioCardSectionTitle'>I like to...</h4>
                    <ul className='list-disc list-inside'>
                        <li>Design elegant UI,UX, Web and mobile Apps</li>
                        <li>Learn and research algorithms and their data inputs</li>
                    </ul>
                </div>

                <div>
                    <h4 className='bioCardSectionTitle'>Dev Tools:</h4>
                    <p>One, Two, Three</p>
                </div>

                <div>
                    <h4 className='bioCardSectionTitle'>Languages:</h4>
                    <p>One, Two, Three</p>
                </div>
            </div>
        </div>
    );
};

export default BioEngineeringCard;
