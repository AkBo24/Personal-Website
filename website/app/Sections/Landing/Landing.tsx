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
            <div className='text-5xl '>
                <h2 className='text-gold mb-4'>Well, Hello!</h2>
                <h1 className='text-secondaryText mb-4'>
                    My name is{' '}
                    <span className='text-neutral-50 font-semibold'>Akshay</span>
                </h1>

                <div>
                    <h1 className='text-secondaryText'>
                        I'm a{' '}
                        <span
                            className='text-gold inline-flex flex-col 
                                        h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] 
                                        md:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] 
                                        overflow-hidden'>
                            <ul className='block animate-textSlide3 text-left leading-tight [&_li]:block'>
                                <li>Software Engineer</li>
                                <li>Web Designer</li>
                                <li>Data Scientist</li>
                                <li aria-hidden='true'>Software Engineer</li>
                            </ul>
                        </span>
                    </h1>
                </div>
            </div>
            <h2 className='text-secondaryText text-2xl my-20'>
                I can help you design functionally beautiful digital products with an
                emphasis on{' '}
                <span className='font-bold text-neutral-50'>user experience</span> based
                on meaningful{' '}
                <span className='font-bold bg-gradient-to-r from-mint to-lightPrimaryBlue inline-block text-transparent bg-clip-text'>
                    data insights.
                </span>
            </h2>

            <button className='relative self-start bg-lightPrimaryBlue p-2 rounded-sm group hover:animate-slideUpLeft'>
                <div className='-z-10 w-[101px] h-[40px] absolute border-lightPrimaryBlue border rounded-sm group-hover:animate-slideDownRight' />
                Learn More
            </button>
        </div>
    );
};

export default Landing;
