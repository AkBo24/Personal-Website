import React from 'react';

type ProjectProps = {
    title: string;
    details: string;
    skills: string[];
};

const Project = ({ title, details, skills }: ProjectProps) => {
    return (
        <div className='transistion ease-in-out duration-200 hover:-translate-y-3'>
            <h3 className='text-gold font-medium'>Featured Project</h3>

            <div className='bg-neutral-900 p-3 rounded'>
                <h3 className='text-neutral-50 font-semibold'>{title}</h3>
                <p className='py-3'>{details}</p>

                {skills.map((skill) => (
                    <h3 className='text-lightPrimaryBlue inline pr-2'>{skill}</h3>
                ))}
            </div>
        </div>
    );
};

export default Project;
