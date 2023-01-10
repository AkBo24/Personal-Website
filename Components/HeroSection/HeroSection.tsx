import PictureOfMeLarge from '../PictureOfMeLarge/PictureOfMeLarge';
import PictureOfMeSmall from '../PictureOfMeSmall/PictureOfMeSmall';

const HeroSection = () => {
    return (
        <>
            {/* Tablet and larger */}
            <div className='sm:hidden md:flex justify-center gap-40 py-40'>
                <div className='flex flex-col gap-2 font-sans text-slate-100'>
                    <h1 className='text-[5.5em] font-light leading-[1.2em]'>
                        Hey :) I&apos;m <br /> Akshay Bodla.
                    </h1>

                    <h2 className='text-lightGreen text-[40px] font-[600] leading-[48px]'>
                        Developer, Designer, Infinite
                        <br />
                        Learner
                    </h2>

                    <p className='pt-10 w-[607px] text-[20px] leading-[24.2px]'>
                        I’m a senior Computer Science and Data Science at the University
                        of Wisconsin-Madison. I&apos;m interested in Full stack
                        development security, and UI/UX design.{' '}
                        <span className='font-bold'>
                            I love to learn and I especially love what I do.
                        </span>
                    </p>
                </div>

                <div className=''>
                    <PictureOfMeLarge />
                </div>
            </div>

            {/* Mobile */}
            <div className='sm:grid md:hidden h-[80vh] grid-rows-7 px-4 py-3 text-slate-100'>
                <div className='row-[1_/_3]'>
                    <h1 className='text-6xl'>
                        Hey :) I&apos;m <br /> Akshay Bodla
                    </h1>

                    <h2 className='text-lightGreen text-3xl'>
                        Developer, Designer, Infinite Learner
                    </h2>
                </div>

                <div className='row-[3_/6]'>
                    <PictureOfMeSmall />
                </div>

                <p className='row-[6_/_7] text-lg'>
                    I’m a senior Computer Science and Data Science at the University of
                    Wisconsin-Madison. I&apos;m interested in Full stack development
                    security, and UI/UX design.{' '}
                    <span className='font-semibold'>
                        I love to learn and I especially love what I do.
                    </span>
                </p>
            </div>
        </>
    );
};

export default HeroSection;
