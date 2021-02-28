import React from 'react';
import Vector from '../images/plane/Vector.png';
import Line from '../images/plane/Line.png';
import Vector2 from '../images/plane/Vector (1).png';
import Line2 from '../images/plane/Line (1).png';

const Touch = () => {
    return (
        <section className="touch">
                    <img className="touch__planeOne" src={Vector} alt="plane"/>
                    <img className="touch__branchOne" src={Line} alt="plane"/>
                    <p className="touch__text">Stay in touch</p>
                    <h3 className="touch__subTitle">Sign up to our newsletter</h3>
                    <div className="touch__test">
                        <input className="touch__input" placeholder="Your email" type="text"/>
                        <button className="touch__btn"><span className="touch__sab">Sabscribe</span></button>
                    </div>
                    <img className="touch__planeTwo" src={Vector2} alt="plane"/>
                    <img className="touch__branchTwo" src={Line2} alt="plane"/>
        </section>
    );
};

export default Touch;