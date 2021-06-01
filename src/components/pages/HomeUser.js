import React from 'react';
import HeroSectionUser from '../Home/HeroSectionUser';
import Cards from '../Card/Cards';
import Footer from '../Home/Footer';
import Box from '../Box/Box';
import Feedback from "../feedback.component";


function Home () {
    return(
        <>
        <HeroSectionUser />
        <Cards/>
        <Box/>
        <Feedback/>
        <Footer/>
        </>
    );
}

export default Home;