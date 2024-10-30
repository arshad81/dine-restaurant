import React from 'react';
import {Link } from "react-router-dom";

const Header = () => {
    return(
        <section className="header-section">
            <div className="header-text-div">
                <p className="header-title">dine</p>
                <p className="header-title-2">Exquisite dining since 1989</p>
                <p className="header-paragraph">Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                <Link to="/booking">
                <button className="btn">Book A Table</button>
                </Link>
            </div>
        </section>
    )
}

export default Header