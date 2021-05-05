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
                        src="images/discord.svg"
                        text="Discord"
                        path='discord'
                        
                        />
                        <BoxItem
                        src="images/Teams.svg"
                        text="Team's"
                        path='teams'
                        
                        />
                        <BoxItem
                        src="images/googledoc.svg"
                        text="G-Doc"
                        path='google-doc'
                        
                        />
                        <BoxItem
                        src="images/winrar.svg"
                        text="Winrar"
                        path='winrar'
                        
                        />
                        
                    </ul>
                    <ul className="box__items">
                        
                        <BoxItem
                        src="images/gimp.svg"
                        text="Gimp"
                        path='gimp'
                        
                        />
                        <BoxItem
                        src="images/trello.svg"
                        text="Trello"
                        path='trello'
                        
                        />
                        <BoxItem
                        src="images/office.svg"
                        text="Office"
                        path='office'
                        
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Box
