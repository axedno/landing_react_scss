import React from 'react';
import Photo from '../images/Photo.jpg'
import Photo1 from '../images/photo (1).jpg';
import Photo2 from  '../images/photo (2).jpg';

const Feature = () => {
    return (
        <section className="feature">
            <h2 className="feature__insigh">Featured insights</h2>
            <div className="feature__cards">
                <div className="feature__cardsOne">
                    <img className="feature__imgOne" src={Photo} alt="photo"/>
                        <p className="feature__way">Coaching</p>
                        <h3 className="feature__coaching">How coaching helps <br/> your team
                            be engaged <br/> during the Covid era</h3>
                        <p className="feature__date">Published on January 27th, 2021</p>
                </div>
                <div className="feature__cardsTwo">
                    <img className="feature__imgTwo" src={Photo1} alt="photo"/>
                        <p className="feature__way">Productivity</p>
                        <h3 className="feature__coaching">Why coaching should <br/> be available
                            to every <br/> employee
                        </h3>
                        <p className="feature__date">Published on January 12th, 2021</p>
                </div>
                <div className="feature__cardsThree">
                    <img className="feature__imgThree" src={Photo2} alt="photo"/>
                        <p className="feature__way">Coaching</p>
                        <h3 className="feature__coaching">How coaching promotes <br/> inclusive teams
                        </h3>
                        <p id="published" className="feature__date">Published on November 19th, 2020</p>
                </div>
            </div>
            <button className="feature__btn"><span className="feature__btnText">Read all articles</span></button>
        </section>
    );
};

export default Feature;