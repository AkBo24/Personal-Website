import React from 'react';
import BioCardContainer from '../BioCards/BioCardContainer';
import HeroSection from '../HeroSection/HeroSection';

const HomePage = () => {
    return (
        <div className='grid gap-28'>
            <HeroSection />
            <BioCardContainer />
        </div>
    );
};

export default HomePage;
