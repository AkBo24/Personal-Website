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
        <div className='relative'>
            <div className='hidden md:block'>
                <div className='absolute -bottom-10 -left-32'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='111'
                        height='38'
                        viewBox='0 0 111 38'
                        fill='none'>
                        <path
                            d='M109.123 0V12.1622H72.7485V24.3243H36.3742V36.4865H0'
                            stroke='#50C878'
                            stroke-width='3'
                        />
                    </svg>
                </div>

                <div className='absolute top-10 -right-10'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='111'
                        height='38'
                        viewBox='0 0 111 38'
                        fill='none'>
                        <path
                            d='M109.123 0V12.1622H72.7485V24.3243H36.3742V36.4865H0'
                            stroke='#50C878'
                            stroke-width='3'
                        />
                    </svg>
                </div>

                <div className='absolute top-28 -left-10'>
                    <Grid />
                </div>

                <div className='absolute -bottom-10 -right-20'>
                    <Grid />
                </div>

                <div className='absolute bottom-10 right-px '>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='900'
                        height='505'
                        viewBox='0 0 910 505'
                        fill='none'>
                        <path
                            d='M2 457.597V501C2 502.105 2.89543 503 4 503H907C908.105 503 909 502.105 909 501V4C909 2.89543 908.105 2 907 2L721.672 2'
                            stroke='#50C878'
                            stroke-width='3'
                        />
                    </svg>
                </div>
            </div>

            <div
                className='z-10 relative'
                onMouseMove={(e) => {
                    // const newStyle = setCoordinates(e.target.screenX, e.target.screenY);

                    // if (e.clientX < 580)
                    //     return {
                    //         ...initialStyle,
                    //         left: '0px',
                    //     };
                    // else if (e.clientX > 793)
                    //     return {
                    //         ...initialStyle,
                    //         right: '0px',
                    //     };
                    let newCoord = e.clientX - 580;

                    if (e.clientX < 580) newCoord = 1;
                    else if (e.clientX > 795) newCoord = 216;

                    setStyle({
                        ...initialStyle,
                        left: `${newCoord}px`,
                    });
                }}>
                <h2 className='text-amber-300 text-7xl font-normal pb-10'>Hey! I'm</h2>
                <h1 className='text-amber-300 text-[200px] font-extrabold tracking-[20px]'>
                    Akshay
                </h1>

                <div className='inline-flex'>
                    <h1 className='text-amber-300 text-[200px] font-extrabold tracking-[20px]'>
                        B
                    </h1>
                    <div className='relative flex items-center mt-10 w-[309px] h-[100px] bg-lightPrimaryBlue rounded-[100px] self-center pr-4'>
                        <div style={style} />
                        {/* <div className='w-[92px] h-[92px] bg-amber-300 rounded-full translate-x-1 animate-bounce ' /> */}
                    </div>

                    <h1 className='pl-4 text-amber-300 text-[200px] font-extrabold tracking-[20px] '>
                        dla
                    </h1>
                </div>
            </div>

            {/* <div className='items-center animate-bounce'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='75'
                    height='41'
                    viewBox='0 0 75 41'
                    fill='none'>
                    <path
                        d='M2 4.2688L36.818 37.3098C37.6192 38.0701 38.8851 38.037 39.6454 37.2358L72.6864 2.41781'
                        stroke='#EBCD52'
                        stroke-width='5'
                    />
                </svg>
            </div> */}
        </div>
    );
};

export default Landing;
