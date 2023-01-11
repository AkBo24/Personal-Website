import React from 'react';
import BioEngineeringCard from './BioEngineeringCard/BioEngineeringCard';

const BioCardContainer = () => {
    return (
        <div className='flex sm:flex-col lg:flex-row justify-center items-center gap-9 px-20'>
            <BioEngineeringCard />
            <BioEngineeringCard />
        </div>
    );
};

export default BioCardContainer;
