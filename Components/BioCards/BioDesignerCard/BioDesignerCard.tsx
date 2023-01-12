import React from 'react';

const Icon = () => (
    <svg
        width='92'
        height='92'
        viewBox='0 0 92 92'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M46 92C58.2 92 69.9002 87.1536 78.5269 78.5269C87.1536 69.9002 92 58.2 92 46C92 33.8 87.1536 22.0998 78.5269 13.4731C69.9002 4.84642 58.2 2.37542e-06 46 0L46 46L46 92Z'
            fill='#50C878'
        />
        <path
            d='M46.5 23H13C10.2386 23 8 25.2386 8 28V64C8 66.7614 10.2386 69 13 69H62C64.7614 69 67 66.7614 67 64V28C67 25.2386 64.7614 23 62 23H57.75H55.5'
            stroke='black'
            stroke-width='3'
        />
        <path d='M9.5 57.5H65.5' stroke='black' stroke-width='3' />
        <path d='M37 68L34 75' stroke='black' stroke-width='3' />
        <path d='M40 68L43 75' stroke='black' stroke-width='3' />
        <path
            d='M26 75H51C52.6569 75 54 76.3431 54 78V80H22V79C22 76.7909 23.7909 75 26 75Z'
            stroke='black'
            stroke-width='2'
        />
        <rect x='15' y='79' width='45' height='2' rx='1' fill='black' />
        <path
            d='M36.6606 36.0498C28.2791 36.0498 29.9935 46.6723 30.4697 51C32.6921 49.164 33.6851 47.8526 36.6606 47.8526C42.6 47.8526 45.2327 41.1643 45.2327 39.9841M36.6606 36.0498L45.2327 39.9841M36.6606 36.0498L39.6986 32.1155M45.2327 39.9841L47.6138 35.6564M47.6138 35.6564L59.5195 16.3785C61.9006 10.0836 54.7572 11.6574 52.8523 14.4114L39.6986 32.1155M47.6138 35.6564L39.6986 32.1155'
            stroke='black'
            stroke-width='2'
        />
    </svg>
);

const BioDesignerCard = () => {
    return (
        <div className='flex-1 py-8 px-10 drop-shadow-card bg-slate-100 rounded-md max-w-lg'>
            <div className='flex justify-center mb-10 rounded-full'>
                <Icon />
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

export default BioDesignerCard;
