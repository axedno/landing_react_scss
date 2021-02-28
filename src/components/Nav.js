import React from 'react';

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav__sama">
                <div className="nav__cirkul"></div>
                <div className="nav__name">Sama</div>
                <div className="nav__cirkulSmall"></div>
            </div>
            <div className="nav__menu">
                <div className="nav__home">Home</div>
                <div className="nav__how">How it Works</div>
                <div className="nav__why">Why Sama?</div>
                <div className="nav__about">About Us</div>
                <div className="nav__coach">Coach</div>
                <button className="nav__btn"><span className="nav__book">Book a Demo</span></button>
            </div>
        </nav>
    );
};

export default Nav;