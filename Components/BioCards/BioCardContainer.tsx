import React from 'react';
import BioEngineeringCard from './BioEngineeringCard/BioEngineeringCard';
import BioDesignerCard from './BioDesignerCard/BioDesignerCard';

const BioCardContainer = () => {
    return (
        <div className='flex sm:flex-col lg:flex-row justify-center items-center gap-9 px-20'>
            <BioEngineeringCard />
            <BioDesignerCard />
        </div>
    );
};

export default BioCardContainer;
