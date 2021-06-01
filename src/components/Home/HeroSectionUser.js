import React from 'react';
import { Button } from './Button';
import '../css/HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <img className="svg-header"src="/images/SvgHeader.svg" alt="/"/>
            <h1>We are DigiSkills</h1>
            <p>A WebSite to develop your digital skills</p>            
        </div>
    )
}

export default HeroSection
