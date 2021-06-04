import React from 'react'
import BoxItem from './BoxItem'
import '../css/Box.css';

function Box() {
    return (
        <div className='box'>
            <h1>Useful tools</h1>
           
            <div className="box__container">
            
                <div className="box__wrapper">
                    <ul className="box__items">
                        <BoxItem
                        src="images/discord.svg"
                        text="Discord"
                        path='tools'
                        
                        />
                        <BoxItem
                        src="images/Teams.svg"
                        text="Team's"
                        path='tools'
                        
                        />
                        <BoxItem
                        src="images/googledoc.svg"
                        text="G-Doc"
                        path='tools'
                        
                        />
                        <BoxItem
                        src="images/winrar.svg"
                        text="Winrar"
                        path='tools'
                        
                        />
                        
                    </ul>
                    <ul className="box__items">
                        
                        <BoxItem
                        src="images/gimp.svg"
                        text="Gimp"
                        path='tools'
                        
                        />
                        <BoxItem
                        src="images/trello.svg"
                        text="Trello"
                        path='tools'
                        
                        />
                        <BoxItem
                        src="images/office.svg"
                        text="Office"
                        path='tools'
                        
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Box
