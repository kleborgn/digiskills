import React from 'react'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <img className="svg-footer" src="/images/SvgFooter.png" alt="/"/>
            <h1>Go test yourself !</h1>
            <button className="btn-footer">
                Quiz !
            </button>
            
        </div>
    )
}

export default Footer
