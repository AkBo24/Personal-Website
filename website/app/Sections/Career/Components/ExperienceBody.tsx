import { useState } from 'react';
import { Experience } from '../ExperienceData';

const ExperienceBody = ({ activeExperience }: { activeExperience: Experience }) => {
    // const [activeExperience, setActiveExperience] = useState<Experience>(experiences[0]);

    return (
        <div className='pt-3'>
            <h3 className='font-semibold mb-2 text-lg'>
                {activeExperience.title}{' '}
                <span className='text-gold'>@ {activeExperience.workPlace.name}</span>
            </h3>
            <p className='text-secondaryText'>
                {activeExperience.dateBegin} - {activeExperience.dateEnd}
            </p>
            <ul className='list-disc pl-4'>
                {activeExperience.responsibilities.map((responsibility) => (
                    <li className='text-secondaryText'>{responsibility}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceBody;
