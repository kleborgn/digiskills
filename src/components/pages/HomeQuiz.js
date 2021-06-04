import React from 'react'
import '../css/HomeQuiz.css'
import { Link } from 'react-router-dom';
const HomeQuiz = () => {
    return (
        <div className="background-quiz">
            <div className="container-quiz">
                <h1>Choose your quiz and train your skills !</h1>
                <div className="wrapper-quiz">
                        <ul className="categorie">
                            <li className="item-quiz">
                                
                                <Link to="/quiz/1">
                                    <div className="title_quiz devices">
                                        Devices
                                    </div>
                                </Link>
                                
                            </li>
                            <li className="item-quiz">
                               
                                <Link to="/quiz/2">
                                    <div className="title_quiz communication" >
                                        Communication
                                    </div>
                                </Link>
                                
                            </li>
                            <li className="item-quiz">
                              
                                <Link to="/quiz/3">
                                    <div className="title_quiz creating">
                                        Creating and editing
                                    </div>
                                </Link>
                            </li>
                            <li className="item-quiz">
                                
                                <Link to="/quiz/4">
                                    <div className="title_quiz security">
                                        Security
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <ul className="categorie">
                            <li className="item-quiz">
                                
                                <Link to="/quiz/5">
                                    <div className="title_quiz final">
                                        Final Quiz
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
