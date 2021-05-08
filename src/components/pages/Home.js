import React from 'react';
import HeroSection from '../Home/HeroSection';
import Cards from '../Card/Cards';
import Footer from '../Home/Footer';
import Box from '../Box/Box';


function Home () {
    return(
        <>
        <HeroSection />
        <Cards/>
        <Box/>
        <Footer/>
        </>
    );
}

export default Home;