import React from 'react';
import Section from '../images/Section.jpg';

const Engement = () => {
    return (
        <section className="engement">
            <div className="engement__block">
                <h3 className="engement__subTitle">Elevate engagement</h3>
                <p className="engement__descr">Our powerful digital platform and proprietary algorithm matches people to
                    the right
                    coach - based on their professional development needs and personal profile.</p>
                <p className="engement__elevate">Elevate engagement</p>
                <p className="engement__delimeter"></p>
            </div>
            <img className="engement__img" src={Section} alt="sama"/>
        </section>

);
};

export default Engement;