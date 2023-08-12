import React from 'react';
import { PrettyListItem } from '../../Interfaces/PrettyListItem.interfaces';
import PrettyList from './PrettyList/PrettyList';

const MoreAboutMe = () => {
    const certificationPrettyListItems: PrettyListItem[] = [
        {
            title: 'Certified ScrumMaster® (CSM®) TEsting',
            subtitle: 'Scrum Alliance, 2022',
            description:
                'Facilitated agile practices as a Scrum Master. I remove team and organizational impediments.',
            key: 1,
        },
    ];

    const projectPrettyListItems: PrettyListItem[] = [
        {
            title: 'Better living through correlation: Data-Based Mobile App',
            subtitle: 'Medtronic, 2021',
            description: 'Lorem Ipsum',
            key: 1,
        },

        {
            title: 't2',
            subtitle: '',
            description: '',
            key: 2,
        },
    ];

    return (
        <div>
            <div className='sectionContainerPaddings relative bg-secondaryGold -mt-40 mb-4'>
                <div className='absolute -bottom-0'>
                    <h3 className='text-6xl font-bold'>
                        More about{' '}
                        <span className='text-primaryBlue font-semibold'>me.</span>
                    </h3>
                    <div className='w-32 h-1 bg-primaryBlue rounded-sm' />
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='relative grid grid-rows-2 gap-20 p-5 pt-8 lg:grid-cols-2 max-w-7xl h-fit bg-slate-100 rounded-md drop-shadow-card'>
                    <div className=''>
                        <h4 className='text-primaryBlue text-4xl tracking-wide mb-6'>
                            Certifications
                        </h4>

                        <PrettyList listItems={certificationPrettyListItems} />
                    </div>
                    <div className=''>
                        <h4 className='text-primaryBlue text-4xl tracking-wide mb-6'>
                            Projects
                        </h4>
                        <PrettyList listItems={projectPrettyListItems} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreAboutMe;
