import React from 'react'
import '../css/Page404.css';
const Page404 = () => {
    return (
        <div>
            <div className="start">
                <div className="central-body">
                    <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" alt="404Pages" width="300px" />
                </div>
                <div className="objects">
                    <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" alt="rocket" width="40px" />
                    <div className="earth-moon">
                        <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" alt="earth" width="100px" />
                        <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" alt="moon" width="80px" />
                    </div>
                </div>
                <div className="glowing_stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>

                </div>
            </div>
        </div>
    )
}

export default Page404
