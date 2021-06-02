import React, {useState} from 'react';
import HeroSection from '../Home/HeroSection';
import Cards from '../Card/Cards';
import Footer from '../Home/Footer';
import Box from '../Box/Box';
import Feedback from "../feedback.component";
import Disclaimer from "./Disclaimer";



function Home () {
    return(
        <>
        <HeroSection />
        <Cards/>
        <Box/>
        <Feedback/>
        <Footer/>
        <Disclaimer/>
        </>
    );
}

export default Home;