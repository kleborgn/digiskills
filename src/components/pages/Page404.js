import React from 'react'
import '../css/Page404.css';
const Page404 = () => {
    return (
        <div>
            <div className="start">
            <div class="central-body">
                <img class="image-404" src="http://salehriaz.com/404Page/img/404.svg" alt="404Pages"width="300px"/>
            </div>
            <div class="objects">
                <img class="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" alt="rocket"width="40px"/>
                <div class="earth-moon">
                    <img class="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" alt="earth"width="100px"/>
                    <img class="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" alt="moon"width="80px"/>
                </div>
            </div>
            <div class="glowing_stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>

            </div>
            </div>
        </div>
    )
}

export default Page404
