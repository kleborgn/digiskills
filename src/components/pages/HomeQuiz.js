import React from 'react'
import '../css/HomeQuiz.css'
import { Link } from 'react-router-dom';
const HomeQuiz = () => {
    return (
        <div>
            <div className="container-quiz">
                <div className="wrapper-quiz">
                        <ul className="categorie">
                            <li className="item-quiz">
                                <h2>Quiz N°1</h2>
                                <Link to="/q_devices">
                                    <div className="title_quiz devices">
                                        Devices
                                    </div>
                                </Link>
                                
                            </li>
                            <li className="item-quiz">
                                <h2>Quiz N°2</h2>
                                <Link to="/q_communication">
                                    <div className="title_quiz communication" >
                                        Communication
                                    </div>
                                </Link>
                                
                            </li>
                            <li className="item-quiz">
                                <h2>Quiz N°3</h2>
                                <Link to="/q_creating">
                                    <div className="title_quiz creating">
                                        Creating and editing
                                    </div>
                                </Link>
                            </li>
                            <li className="item-quiz">
                                <h2>Quiz N°4</h2>
                                <Link to="/q_security">
                                    <div className="title_quiz security">
                                        Security
                                    </div>
                                </Link>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default HomeQuiz
