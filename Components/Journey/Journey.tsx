import React from 'react';
import EducationCard from '../JourneyCards/EducationCard/EducationCard';
import ExperienceCard from '../JourneyCards/Experience Card/ExperienceCard';
import FutureCard from '../JourneyCards/FutureCard/FutureCard';

const Journey = () => {
    return (
        <>
            <div className='flex flex-col items-center bg-primaryBlue pt-10 pb-32'>
                <div className='max-w-4xl'>
                    <h3 className='text-textGold text-6xl font-[900] mb-4'>
                        Eight years ago,
                    </h3>

                    <p className='journeyParagraph '>
                        I started my journey into computer science with a web and graphic
                        design middle class. The thrill of taking an idea and learning
                        appropriate skills to actually build it invigorated me enough to
                        continue computer science into high school and college. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Mi proin sed
                        libero enim sed faucibus turpis. Cursus turpis massa tincidunt dui
                        ut. Turpis massa sed elementum tempus egestas.{' '}
                    </p>
                    <p className='journeyParagraph'>
                        {' '}
                        Velit dignissim sodales ut eu sem integer vitae justo eget. Nam
                        libero justo laoreet sit amet cursus. Enim lobortis scelerisque
                        fermentum dui faucibus in ornare. Magna fringilla urna porttitor
                        rhoncus dolor purus non. Ultrices vitae auctor eu augue ut lectus
                        arcu bibendum. Nisl suscipit adipiscing bibendum est ultricies. Eu
                        volutpat odio facilisis mauris sit amet. Convallis aenean et
                        tortor at. Fermentum odio eu feugiat pretium nibh ipsum consequat
                        nisl vel. Magna fringilla urna porttitor rhoncus dolor purus non
                        enim. Mi sit amet mauris commodo quis.{' '}
                    </p>
                    <p className='journeyParagraph'>
                        Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Est
                        placerat in egestas erat. Pulvinar pellentesque habitant morbi
                        tristique. Pretium viverra suspendisse potenti nullam ac tortor.
                        Sed turpis tincidunt id aliquet. Aliquet lectus proin nibh nisl
                        condimentum id venenatis a condimentum. Et odio pellentesque diam
                        volutpat commodo sed egestas. Tincidunt ornare massa eget egestas
                        purus viverra accumsan in. Cras pulvinar mattis nunc sed blandit
                        libero volutpat sed. Malesuada pellentesque elit eget gravida cum
                        sociis. Morbi tempus iaculis urna id volutpat. Sapien pellentesque
                        habitant morbi tristique senectus et. Dui accumsan sit amet nulla
                        facilisi morbi tempus iaculis. Erat nam at lectus urna duis
                        convallis convallis tellus id. Elementum curabitur vitae nunc sed
                        velit dignissim sodales. Non diam phasellus vestibulum lorem sed.
                        At varius vel pharetra vel turpis nunc eget lorem.
                    </p>

                    <p className='journeyParagraph'>
                        So, this is where I am and where I want to be.
                    </p>
                </div>
            </div>

            <div className='flex sm:flex-col lg:flex-row justify-around items-stretch gap-6 -mt-48 px-10'>
                <EducationCard />
                <ExperienceCard />
                <FutureCard />
            </div>
        </>
    );
};

export default Journey;
