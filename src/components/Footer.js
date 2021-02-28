import React from 'react';
import icon from '../images/icon.png';

const Footer = () => {
    return (

        <footer className="footer">
            <div className="footer__blockAll">
                <div className="footer__block">
                    <div className="footer__cirkul"></div>
                    <p className="footer__name">Sama</p>
                    <div className="footer__cirkulSmall"></div>
                </div>
                <div className="footer__sitemap">
                    <h4 className="footer__subTitle">Sitemap</h4>
                    <p className="footer__text">Home</p>
                    <p className="footer__text">Our answer</p>
                    <p className="footer__text">Coaching</p>
                    <p className="footer__text">Platform</p>
                    <p className="footer__text">About Sama</p>
                    <p className="footer__text">Coach</p>
                    <p className="footer__text">Contact us</p>
                    <p className="footer__text">Book a demo <a className="footer__item" href="#"><img
                        src={icon} alt="icon"/></a></p>
                </div>
                <div className="footer__social">
                    <h4 className="footer__subTitle">Social</h4>
                    <p className="footer__text">LinkedIn <a className="footer__item" href="#"><img
                        src={icon} alt="icon"/></a></p>
                    <p className="footer__text">Instagram <a className="footer__item" href="#"><img
                        src={icon} alt="icon"/></a></p>
                    <p className="footer__text">Facebook <a className="footer__item" href="#"><img
                        src={icon} alt="icon"/></a></p>
                    <p className="footer__text">Twitter <a className="footer__item" href="#"><img
                        src={icon} alt="icon"/></a></p>
                </div>
                <div className="footer__get">
                    <h4 className="footer__subTitle">Get the app</h4>
                    <p className="footer__text">AppStore <a className="footer__item" href="#"><img
                        src={icon }alt="icon"/></a></p>
                    <p className="footer__text">Google Play <a className="footer__item" href="#"><img
                        src={icon}alt="icon"/></a></p>
                </div>
            </div>
            <p className="footer__copyr">Copyright © 2021 Sama Europe Ltd. GDPR compliant.</p>
            <p className="footer__location">71-75 Shelton St, Covent Garden, London WC2H 9JQ.</p>
            <p className="footer__end">Terms and Conditions</p>
        </footer>
);
};

export default Footer;