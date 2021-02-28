import React from 'react';
import oval from '../images/Oval.png';
import oval1 from  '../images/Oval (1).png';
import oval2 from  '../images/Oval (2).png';
import PromoDecorativeArrow from '../images/arrow/Promo-decorative-arrow.png';
import SectionPhoto from  '../images/Section-photo.jpg';


const Career = () => {
    return (
        <section className="career">
            <div className="career__info">
                <div className="career__one">
                    <div id="two"><span className='career__numb'>2</span><span className="career__x">x</span></div>
                    <br/>
                        <div className="career__feature">More inclusive</div>
                </div>
                <div className="career__two">
                    <div><span className="career__plus">+</span><span className='career__numb'>65</span>
                        <span className="career__percent">%</span></div>
                    <br/>
                        <div className="career__feature">Engagement</div>
                </div>
                <div className="career__three">
                    <div><span className="career__plus">+</span><span className='career__numb'>53</span>
                        <span className="career__percent">%</span></div>
                    <br/>
                        <div className="career__feature">Productivity</div>
                </div>
                <div className="career__four">
                    <div><span className="career__plus">+</span><span className='career__numb'>80</span>
                        <span className="career__percent">%</span></div>
                    <br/>
                        <div className="career__feature">Resilience</div>
                </div>
            </div>

            <div className="career__back">
                <p className='career__get'>Getting started is as easy as 1, 2, 3...</p>
                <div className="career__cirkul">
                    <div className="career__team">
                        <img id="img1" className="career__cirkul-img" src={oval} alt="oval"/>
                            <p className="career__number">1</p>
                            <p className="career__empl">Your company signs <br/> up to Sama.</p>
                    </div>
                    <div className="career__team">
                        <img id="img2" className="career__cirkul-img" src={oval1} alt="oval"/>
                            <p className="career__number">2</p>
                            <p className="career__empl">Employees match with <br/> their professional coach.</p>
                    </div>
                    <div className="career__team">
                        <img id="img3" className="career__cirkul-img" src={oval2} alt="oval"/>
                            <p className="career__number">3</p>
                            <p className="career__empl">Employees begin working <br/> with their coach via
                                chat, <br/> voice or video call.</p>
                    </div>
                </div>
                <img className="career__shape" src={PromoDecorativeArrow} alt="arrow"/>
            </div>


            <div className="career__infoTwo">
                <img className="career__section" src={SectionPhoto} alt="section"/>
                    <div className="career__connect">
                        <p className="career__champ"> Champion their <br/> career</p>
                        <p className="career__employ">Sama connects your employees to the best professional coach for
                            them.
                            Built to seamlessly fit into your organisation, and powered by sophisticated
                            technology and our team of highly experienced coaches.</p>
                        <div>
                            <p className="career__book">Book a demo</p>
                            <p className="career__delimeter"></p>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default Career;