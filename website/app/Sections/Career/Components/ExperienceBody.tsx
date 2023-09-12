import { useState } from 'react';
import { Experience } from '../ExperienceData';

const ExperienceBody = ({ activeExperience }: { activeExperience: Experience }) => {
    // const [activeExperience, setActiveExperience] = useState<Experience>(experiences[0]);

    return (
        <div className='pt-3 max-w-xl'>
            <h3 className='font-semibold mb-2 text-2xl'>
                {activeExperience.title}{' '}
                <span className='text-gold'>@ {activeExperience.workPlace.name}</span>
            </h3>
            <p className='text-secondaryText'>
                {activeExperience.dateBegin} - {activeExperience.dateEnd}
            </p>
            <ul
                className='mt-3 pl-4'
                style={{
                    color: 'red',
                }}>
                {activeExperience.responsibilities.map((responsibility, i) => (
                    <li className='text-secondaryText pl-4 mt-2 leading-relaxed' key={i}>
                        {responsibility}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceBody;
