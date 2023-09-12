import { useState } from 'react';
import experiences, { WorkPlace, workPlaces } from '../ExperienceData';

const SmExperience = () => {
    const [activeExperiences, setActiveExperiences] = useState<
        {
            active: boolean;
            workPlace: WorkPlace;
        }[]
    >(
        workPlaces.map((workPlace) => ({
            active: false,
            workPlace,
        }))
    );

    const activateExperience = (i: number) => {
        const newState = activeExperiences.map((experience, k) => ({
            active: i === k ? !experience.active : false,
            workPlace: experience.workPlace,
        }));

        setActiveExperiences(newState);
    };

    return (
        <div>
            {' '}
            {workPlaces.map((workPlace, i) => (
                <>
                    <button
                        className={
                            activeExperiences[i].active
                                ? 'block text-secondaryText p-3 text-left border-l rounded-r-[1px]  bg-lightPrimaryBlue/20 border-l-mint'
                                : 'block text-secondaryText p-3 text-left border-l rounded-r-[1px] ${baseStyle} transition ease-in-out border-l-mint/20 hover:bg-lightPrimaryBlue/20 hover:border-l-mint duration-75'
                        }
                        onClick={(e) => activateExperience(i)}
                        key={workPlace.key}>
                        {workPlace.name}
                    </button>

                    {activeExperiences[i].active && (
                        <div className='mt-2 pl-4'>
                            <h3 className='font-semibold mb-2 '>
                                {experiences[i].title}{' '}
                                <span className='text-gold'>
                                    @ {experiences[i].workPlace.name}
                                </span>
                            </h3>

                            <p className='text-secondaryText'>
                                {experiences[i].dateBegin} - {experiences[i].dateEnd}
                            </p>

                            <ul
                                className='mt-3 pl-4 max-w-xl'
                                style={{
                                    color: 'red',
                                }}>
                                {experiences[i].responsibilities.map(
                                    (responsibility, i) => (
                                        <li
                                            className='text-secondaryText pl-4 mt-2 leading-relaxed'
                                            key={i}>
                                            {responsibility}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    )}
                </>
            ))}
        </div>
    );
};

export default SmExperience;
