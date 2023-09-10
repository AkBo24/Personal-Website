'use client';
import { useState } from 'react';
import { workPlaces } from '../ExperienceData';

const ExperienceSelector = () => {
    const [activeExperience, setActiveExperience] = useState<number>(0);
    const setStyle = (key: number): string => {
        const baseStyle = 'block p-3 text-left border-l rounded-r-[1px]';
        return activeExperience === key
            ? `${baseStyle} bg-lightPrimaryBlue/20 border-l-mint`
            : `${baseStyle} transition ease-in-out border-l-mint/20 hover:bg-lightPrimaryBlue/20 hover:border-l-mint duration-200`;
    };
    const handleClick = (key: number) => setActiveExperience(key);

    return (
        <div className='flex flex-col justify-start'>
            {workPlaces.map((workPlace) => (
                <button
                    className={setStyle(workPlace.key)}
                    onClick={(e) => handleClick(workPlace.key)}
                    key={workPlace.key}>
                    {workPlace.name}
                </button>
            ))}
        </div>
    );
};

export default ExperienceSelector;
