import React from 'react'
import CardItem from './CardItem'
import '../css/Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Our different guides</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/TipsKeeping.jpg"
                        text="Being safe and responsible online"
                        label="Security"
                        path='privacy'
                        
                        />
                        <CardItem
                        src="images/MobileDevices.png"
                        text="Using devices and handling information "
                        label="Information"
                        path='devices'
                        
                        />
                        
                    </ul>
                    <ul className="cards__items">
                        
                        <CardItem
                        src="images/Social-media.png"
                        text="Creating and editing "
                        label="Create"
                        path='creating'
                        
                        />
                        <CardItem
                        src="images/Communicating.png"
                        text="Communicating"
                        label="Communication"
                        path='communication'
                        
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
