import React from 'react';
import { PrettyListItem } from '../../../Interfaces/PrettyListItem.interfaces';

interface PrettyListProps {
    listItems: PrettyListItem[];
}

const PrettyList = (props: PrettyListProps) => {
    return (
        <ul className='relative'>
            {props.listItems.map((listItem) => (
                <li
                    className='pl-14 after:absolute after:top-2 after:left-[6px] after:h-full after:rounded-full
                         after:border-2 after:border-primaryBlue'
                    key={listItem.key}>
                    <div
                        className='absolute rounded-full border-[3px] top-2 left-0
                            border-primaryBlue w-4 h-4 bg-secondaryGold mr-4 z-10'
                    />

                    <h5 className='text-2xl text-slate-800 font-semibold '>
                        {listItem.title}
                    </h5>

                    <p className='text-xl text-slate-800'>{listItem.subtitle}</p>

                    <p>{listItem.description}</p>
                </li>
            ))}

            {/* <li
                className='pl-14 after:absolute after:top-2 after:left-[6px] after:h-full after:rounded-full
                     after:border-2 after:border-primaryBlue'>
                <div
                    className='absolute rounded-full border-[3px] top-2 left-0
                        border-primaryBlue w-4 h-4 bg-secondaryGold mr-4 z-10'
                />

                <h5 className='text-2xl text-slate-800 font-semibold '>{props.title}</h5>

                <p className='text-xl text-slate-800'>{props.subtitle}</p>

                <p>{props.description}</p>
            </li> */}
        </ul>
    );
};

export default PrettyList;
