import React from 'react';
import HeroSection from '../Home/HeroSection';
import Cards from '../Card/Cards';
import Footer from '../Home/Footer';
import Box from '../Box/Box';
import Feedback from "../feedback.component";


function Home () {
    return(
        <>
        <HeroSection />
        <Cards/>
        <Box/>
        <Feedback/>
        <Footer/>
        </>
    );
}

export default Home;