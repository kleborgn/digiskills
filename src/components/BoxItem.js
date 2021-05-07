import React from 'react';
import { Link } from 'react-router-dom';

function BoxItem(props) {
    return (
        <>
            <li className="box__item">
                <Link className="box__item__link" to={props.path}>
                    <div className="img">
                    <img src={props.src} alt="Travel" className="box__item__img"/>
                    </div>
                   
                    <div className="box__item__info">
                        <h2 className="box__item__text">{props.text}

                        </h2>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default BoxItem
