'use client';
import { useState } from 'react';
import Grid from './components/Grid/Grid';

const Landing = () => {
    const initialStyle = {
        width: '92px',
        height: '92px',
        backgroundColor: 'rgb(252 211 77 / 100%)',
        borderRadius: '99999px',
        position: 'absolute',
        left: '0px',
    };
    const [style, setStyle] = useState<object>(initialStyle);

    const setCoordinates = (x: number, y: number) => {
        // You don't need whitespace in here, I added it for readability
        // I would recommend using something like EmotionJS for this
        return {
            ...initialStyle,
            left: `${x}px`,
        };
    };

    return (
        <div className='h-screen flex flex-col justify-center px-44'>
            <div className='mb-20 text-6xl '>
                <h2 className='text-gold mb-4'>Well, Hello!</h2>
                <h1 className='text-secondaryText mb-4'>
                    My name is{' '}
                    <span className='text-neutral-50 font-semibold'>Akshay</span>
                </h1>

                <div>
                    <h1 className='text-secondaryText'>
                        I'm a {`{ Software Engineer } `}
                    </h1>
                </div>
            </div>
            <h2 className='text-secondaryText text-2xl mb-10'>
                I can help you design functionally beautiful digital products with an
                emphasis on user experience based on meaningful data insights.
            </h2>

            <button className='relative self-start bg-lightPrimaryBlue p-2 rounded-sm group hover:animate-slideUpLeft'>
                <div className='-z-10 w-[101px] h-[40px] absolute border-lightPrimaryBlue border rounded-sm group-hover:animate-slideDownRight' />
                Learn More
            </button>
        </div>
    );
};

export default Landing;
