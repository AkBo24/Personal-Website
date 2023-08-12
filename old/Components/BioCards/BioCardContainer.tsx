import React from 'react';
import BioEngineeringCard from './BioEngineeringCard/BioEngineeringCard';
import BioDeveloperCard from './BioDeveloperCard/BioDeveloperCard';

const BioCardContainer = () => {
    return (
        <div className='flex sm:flex-col lg:flex-row justify-center items-center gap-20 px-20'>
            <div className='absolute w-full h-full lg:h-[50%] bg-secondaryGold'></div>
            <BioEngineeringCard />
            <BioDeveloperCard />
        </div>
    );
};

export default BioCardContainer;
