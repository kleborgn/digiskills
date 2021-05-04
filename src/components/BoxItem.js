import React from 'react';
import { Link } from 'react-router-dom';

function BoxItem(props) {
    return (
        <>
            <li className="box__item">
                <Link className="box__item__link" to={props.path}>
                        <img src={props.src} alt="Travel" className="box__item__img"/>
                    <div className="box__item__info">
                        <h3 className="box__item__text">{props.text}

                        </h3>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default BoxItem
