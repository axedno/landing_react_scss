import React from 'react';
import sama from '../images/sama.jpg';
import line from '../images/line.svg';

const Intro = () => {
    return (
        <section className="intro">
            <img className="intro__img" src={sama} alt="sama"/>
                <h1 className="intro__name">
                    Supercharge your team's development
                </h1>
                <div className="intro__descr">
                    We’re elevating engagement to make the world a better place
                    by bringing the power of executive coaching to be everyone.
                </div>
                <div className="intro__test">
                    <input className="intro__input" type="text" placeholder="Your work email"/>
                        <button className="intro__btn"><span className="intro__learn">Learn more</span></button>
                </div>
                <div className="intro__ovalAll">
                    <div className="intro__oval"><span className="intro__text">1:1 coaching</span> <img
                        className="intro__line" src={line} alt="line"/></div>
                    <div className="intro__oval"><span className="intro__text">Empowering</span><img
                        className=" intro__line" src={line} alt="line"/></div>
                    <div className="intro__oval"><span className="intro__text" id='spanThree'>Inclusive</span> <img
                        className="intro__line" src={line} alt="line"/></div>
                </div>
        </section>
    );
};

export default Intro;