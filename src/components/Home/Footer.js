import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <img className="svg-footer" src="/images/SvgFooter.png" alt="/"/>
            <h1>Go test yourself !</h1>
                <Link className="btn-footer" to="/QuizHome">                 
                        Quiz !
                </Link>
                
            
            
        </div>
    )
}

export default Footer
