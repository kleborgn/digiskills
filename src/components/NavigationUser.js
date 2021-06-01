import React, {useState, useEffect} from 'react'
import './css/Navigation.css';
import { Link } from 'react-router-dom';
import { Button } from './Home/Button';
import authService from '../services/auth.service';

const NavigationUser = () => {
    const [click,setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    },[]);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        DigiSkills <i className="fab fa-digital-ocean"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/guides" className="nav-links" onClick={closeMobileMenu}>
                                Guides
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tools" className="nav-links" onClick={closeMobileMenu}>
                                Tools
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/QuizHome" className="nav-links" onClick={closeMobileMenu}>
                                Quiz
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-links" onClick={closeMobileMenu}>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <button className='nav-links-mobile' onClick={authService.logout}><a href="./" className="logout">Logout</a></button>  
                        </li>
                        
                    </ul>
                    {button && <button onClick={authService.logout} className="btn--outline btn--medium"><a className="logout"href="./">Logout</a></button>}
                </div>
        </nav>
       </>
    )
}

export default NavigationUser
