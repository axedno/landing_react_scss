import React from 'react';
import arrow from '../images/arrow/arrow.png';
import Shape from '../images/stars/Shape.svg';
import Shape1 from '../images/stars/Shape (1).svg';
import Shape2 from '../images/stars/Shape (2).svg';
import photoSmall from '../images/photoSmall (1).jpg';
import photoSmallTwo from  '../images/photoSmall (2).jpg';

const Recall = () => {
    return (
        <section className="recall">
            <h3 className="recall__subTitle">Don't just take our word for it</h3>
            <img className="recall__pathOne" src={arrow} alt="arrow"/>
                <div className="recall__cardAll">
                    <div className="recall__cardOne">
                        <div className="recall__starsOne">
                            <img className="recal__starsSize" src={Shape} alt="star"/>
                            <img className="recal__starsSize" src={Shape1} alt="star"/>
                            <img className="recal__starsSize" src={Shape2} alt="star"/>
                            <img className="recal__starsSize" src={Shape1} alt="star"/>
                            <img className="recal__starsSize" src={Shape} alt="star"/>
                        </div>
                        <p className="recall__textOne">
                            Each of our team member is getting precious help in their
                            professional development and can build a program that suit their needs and ambitions.</p>
                        <img className="recall__imgSmall" src={photoSmall} alt="photo"/>
                            <p className="recall__nameOne">Nicolas</p>
                            <p className="recall__profOne">COO at CFTE</p>
                    </div>
                    <div className="recall__cardTwo">
                        <div className="recall__starsTwo">
                            <img className="recall__sizeSmall" src={Shape1} alt="star"/>
                            <img className="recall__sizeSmall" src={Shape} alt="star"/>
                            <img className="recall__sizeSmall" src={Shape1}alt="star"/>
                            <img className="recall__sizeSmall" src={Shape} alt="star"/>
                            <img className="recall__sizeSmall" src={Shape1} alt="star"/>
                        </div>
                        <p className="recall__textTwo">
                            The design of the Sama app allowed for the digital session to take place seamlessly!
                        </p>
                        <p className="recall__nameTwo">Vera</p>
                        <p className="recall__profTwo">Partnership Associate at CFTE</p>
                    </div>
                    <div className="recall__cardThree">
                        <div className="recall__starsThree">
                            <img className="recall__sizeSmall" src={Shape} alt="star"/>
                            <img className="recall__sizeSmall" src={Shape1} alt="star"/>
                            <img className="recall__sizeSmall" src={Shape2} alt="star"/>
                            <img className="recall__sizeSmall" src={Shape1} alt="star"/>
                            <img className="recall__sizeSmall" src={Shape} alt="star"/>
                        </div>
                        <p className="recall__textThree">
                            Sama matched me with a Coach who helped me see that I have exactly
                            what I need to succeed in business (and life)!
                        </p>
                        <img className="recall__imgSmallTwo" src={photoSmallTwo} alt="photo"/>
                            <p className="recall__nameThree">Elise Kayfetz</p>
                            <p className="recall__profThree">Toronto, Canada</p>
                    </div>
                </div>
        </section>
    );
};

export default Recall;