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
        <div className='h-screen flex flex-col justify-center '>
            <div className='text-4xl tracking-wide'>
                <h2 className='text-secondaryText mb-2 md:mb-5'>Well, Hello!</h2>
                <h1 className='text-secondaryText md:mb-5'>
                    My name is <span className='text-gold font-semibold'>Akshay</span>.
                    I'm a
                </h1>

                <h1 className='my-8 md:my-20 text-secondaryText text-3xl md:text-7xl xl:text-9xl'>
                    <span
                        className='text-gold font-semibold inline-flex flex-col 
                                        h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] 
                                        md:h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] 
                                        xl:h-[calc(theme(fontSize.9xl)*theme(lineHeight.tight))] 
                                        overflow-hidden'>
                        <ul className='block animate-textSlide3 text-left leading-tight [&_li]:block'>
                            <li>Software Engineer</li>
                            <li>Product Designer</li>
                            <li>Data Scientist</li>
                            <li aria-hidden='true'>Software Engineer</li>
                        </ul>
                    </span>
                </h1>
            </div>

            <h2 className='text-secondaryText text-xl  md:text-2xl '>
                I create functionally-beautiful digital products with an emphasis on{' '}
                <span className='font-bold text-neutral-50'>user experiences</span>{' '}
                derived from meaningful{' '}
                <span className='font-bold bg-gradient-to-r from-mint to-lightPrimaryBlue inline-block text-transparent bg-clip-text'>
                    data insights.
                </span>{' '}
            </h2>
            <h2 className='text-sm mb-5 md:mb-10'>
                Note: This website is still under development, come back later to see how
                it evolves!
            </h2>
            <button className='relative self-start bg-lightPrimaryBlue p-2 rounded-sm group hover:animate-slideUpLeft text-neutral-50 font-medium'>
                <div className='-z-10 w-[101px] h-[40px] absolute border-lightPrimaryBlue border rounded-sm group-hover:animate-slideDownRight' />
                Learn More
            </button>
            <div className='mt-10'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='25'
                    height='114'
                    viewBox='0 0 25 114'
                    fill='none'>
                    <path
                        d='M12.25 112.5L12.25 5.02315e-06M12.25 112.5L0.931744 101.182M12.25 112.5L23.5683 101.182'
                        stroke='#B9B9B9'
                        strokeWidth='2'
                    />
                </svg>
            </div>
        </div>
    );
};

export default Landing;
