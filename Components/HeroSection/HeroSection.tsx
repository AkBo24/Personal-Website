import Portrait from '../Portrait/Portrait';
import PortraitFrame from '../PortraitFrame/PortraitFrame';

const HeroSection = () => {
    return (
        <div className='sm:pt-[4em] sm:pb-[1.25em] sm:px-[2em] lg:py-24'>
            {/* Tablet and larger */}
            <div className='sm:hidden md:flex items-center justify-center gap-40'>
                <div className='flex flex-col gap-6 font-sans text-slate-100'>
                    <div>
                        <h1 className='text-6xl mb-1'>
                            Hey :) I am <br /> Akshay Bodla.
                        </h1>

                        <h2 className='heroTagLine'>
                            Developer, Designer, Infinite
                            <br />
                            Learner
                        </h2>
                    </div>

                    <p className='text-xl text-slate-200'>
                        I love to build beautiful and scalabale fullstack experiences{' '}
                        <br /> with intuitive user experience
                    </p>

                    {/* <p className='pt-10 w-[607px] text-[20px] leading-[24.2px]'>
                        I’m a senior Computer Science and Data Science at the University
                        of Wisconsin-Madison. I&apos;m interested in Full stack
                        development security, and UI/UX design.{' '}
                        <span className='font-bold'>
                            I love to learn and I especially love what I do.
                        </span>
                    </p> */}
                </div>

                <Portrait imageWidth={300} imageHeight={500} />
            </div>

            {/* Mobile */}
            <div className='sm:grid md:hidden gap-10 grid-rows-7 text-slate-100'>
                <div className='row-[1_/_3]'>
                    <h1 className='heroText'>
                        Hey :) I&apos;m <br /> Akshay Bodla
                    </h1>

                    <h2 className='heroTagLine'>Developer, Designer, Infinite Learner</h2>
                </div>

                <div className='row-[3_/_6]'>
                    <Portrait imageWidth={200} imageHeight={400} />
                </div>

                <p className='text-xl text-slate-200'>
                    I love to build beautiful and scalabale fullstack experiences <br />{' '}
                    with intuitive user experience
                </p>

                {/* <p className='row-[6_/_7] text-lg'>
                    I’m a senior Computer Science and Data Science at the University of
                    Wisconsin-Madison. I&apos;m interested in Full stack development
                    security, and UI/UX design.{' '}
                    <span className='font-semibold'>
                        I love to learn and I especially love what I do.
                    </span>
                </p> */}
            </div>
        </div>
    );
};

export default HeroSection;
