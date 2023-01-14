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
            title: '',
            subtitle: '',
            description: '',
            key: 2,
        },
    ];

    return (
        <div className='sectionContainerPaddings bg-secondaryGold -mt-40 pt-28'>
            <div className='mb-10'>
                <h3 className='text-6xl mb-2'>
                    More about <span className='text-primaryBlue font-semibold'>me.</span>
                </h3>
                <div className='w-32 h-1 bg-primaryBlue rounded-sm' />
            </div>

            <div className='grid grid-rows-2 gap-10 lg:grid-cols-2'>
                <div className=''>
                    <h4 className='text-primaryBlue text-4xl tracking-wide'>
                        Certifications
                    </h4>

                    <PrettyList listItems={certificationPrettyListItems} />
                </div>
                <div className=''>
                    <h4 className='text-primaryBlue text-4xl tracking-wide'>Projects</h4>
                    <PrettyList listItems={projectPrettyListItems} />
                </div>
            </div>
        </div>
    );
};

export default MoreAboutMe;

<div className='flex-1 grid grid-cols-2 grid-rows-4  gap-y-10'>
    <h4 className=' text-3x tracking-wider '>- Certifications</h4>

    <div className='col-[2] row-span-2'>
        <p className='text-2xl tracking-wide mb-2'>Certified ScrumMaster® (CSM®)</p>
        <p className=''>Scrum Alliance, 2022</p>
    </div>

    <h4 className='col-[1] row-[3] flex items-end text-3xl text-primaryBlue tracking-wider'>
        - Notable Class Projects
    </h4>

    <div className='col-[2] row-[3_/_span_2]'>
        <p className='text-2xl tracking-wide mb-2'>
            Better living through correlation: Data-Based Mobile App
        </p>
        <p className=''>Medtronic, 2022</p>
    </div>
    <p className='col-[2] flex items-end text-2xl tracking-wide'></p>
    <p className='col-[2] row-[2]'></p>
    <h4 className='col-[1] row-[3] flex items-end text-3xl text-primaryBlue tracking-wider'>
        - Notable Class Projects
    </h4>

    <p className='col-[2] row-[3] flex items-end text-2xl tracking-wide'></p>

    <p className='col-[2] row-[4]'>Scrum Alliance, 2022</p>
</div>;
