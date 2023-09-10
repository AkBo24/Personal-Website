'use client';
import { useState } from 'react';
import experienceData, { workPlaces } from '../ExperienceData';

const ExperienceSelector = () => {
    const [activeExperience, setActiveExperience] = useState<number>(0);
    const setStyle = (key: number): string => {
        const baseStyle = 'block p-3 text-left border-l rounded-r-[1px]';
        return activeExperience === key
            ? `${baseStyle} bg-lightPrimaryBlue/20 border-l-mint`
            : `${baseStyle} transition ease-in-out delay-150 border-l-mint/20 hover:bg-lightPrimaryBlue/20 hover:border-l-mint duration-300`;
    };
    const handleClick = (key: number) => setActiveExperience(key);

    return (
        <div className='flex flex-col justify-start'>
            {workPlaces.map((experience, i) => (
                <button className={setStyle(i)} onClick={(e) => handleClick(i)} key={i}>
                    {experience}
                </button>
            ))}
        </div>
    );
};

export default ExperienceSelector;
