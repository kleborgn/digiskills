import React from 'react'
import CardItem from '../Card/CardItem'
import '../css/GuideSection.css'

const GuideSection = () => {
    return (
        <div className="guide__container">
            <h1>Find all our guides here !</h1>
            <div className="guide-content">
                <p>In order to deepen your knowledge in digital skills, we have prepared 4 guides, on different topics allowing you to learn or review some useful skills for the good use of a computer and its software !</p>
            </div>
            <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/TipsKeeping.jpg"
                        text="Being safe and responsible is proctecting privacy, protecting data, being responsible online and digital wellbeing
                          "
                        label="Security"
                        path='privacy'
                        
                        />
                        <CardItem
                        src="images/MobileDevices.png"
                        text="Using devices and handling information is Using devices, 
                        Finding and evaluating information
                         "
                        label="Information"
                        path='devices'
                        
                        />
                        <CardItem
                        src="images/Social-media.png"
                        text="Creating and editing documents or digital media and processing numerical data"
                        label="Create"
                        path='creating'
                        
                        />
                        <CardItem
                        src="images/Communicating.png"
                        text="Communicating and sharing and also managing traceable online activities"
                        label="Communication"
                        path='communication'
                        
                        />
                        
                    </ul>
                   
                </div>
            </div>
            </div>
        </div>
    )
}

export default GuideSection
