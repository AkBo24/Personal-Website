import React from 'react';
import BioCardContainer from '../BioCards/BioCardContainer';
import HeroSection from '../HeroSection/HeroSection';
import Journey from '../Journey/Journey';
import MoreAboutMe from '../MoreAboutMe/MoreAboutMe';

const HomePage = () => {
    return (
        <div className='grid gap-28'>
            <HeroSection />
            <BioCardContainer />
            <Journey />
            <MoreAboutMe />
        </div>
    );
};

export default HomePage;
