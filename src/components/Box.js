import React from 'react'
import BoxItem from './BoxItem'
import './Box.css'

function Box() {
    return (
        <div className='box'>
            <h1>Usefull tools</h1>
            <div className="box__container">
                <div className="box__wrapper">
                    <ul className="box__items">
                        <BoxItem
                        src="images/TipsKeeping.jpg"
                        text="Being safe and responsible online"
                        path='privacy'
                        
                        />
                        <BoxItem
                        src="images/TipsKeeping.jpg"
                        text="Being safe and responsible online"
                        path='privacy'
                        
                        />
                        <BoxItem
                        src="images/TipsKeeping.jpg"
                        text="Being safe and responsible online"
                        path='privacy'
                        
                        />
                        <BoxItem
                        src="images/TipsKeeping.jpg"
                        text="Being safe and responsible online"
                        path='privacy'
                        
                        />
                        
                    </ul>
                    <ul className="box__items">
                        
                        <BoxItem
                        src="images/TipsKeeping.jpg"
                        text="Being safe and responsible online"
                        path='privacy'
                        
                        />
                        <BoxItem
                        src="images/TipsKeeping.jpg"
                        text="Being safe and responsible online"
                        path='privacy'
                        
                        />
                        <BoxItem
                        src="images/TipsKeeping.jpg"
                        text="Being safe and responsible online"
                        path='privacy'
                        
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Box
