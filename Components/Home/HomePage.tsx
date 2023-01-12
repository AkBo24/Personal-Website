import React from 'react';
import BioCardContainer from '../BioCards/BioCardContainer';
import HeroSection from '../HeroSection/HeroSection';
import Journey from '../Journey/Journey';

const HomePage = () => {
    return (
        <div className='grid gap-28'>
            <HeroSection />
            <BioCardContainer />
            <Journey />
        </div>
    );
};

export default HomePage;
