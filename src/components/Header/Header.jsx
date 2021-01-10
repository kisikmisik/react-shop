import React from 'react'
import {NavLink} from "react-router-dom";
import logoImage from "../../assets/img/tree.gif"

let Header = (props) => {
    return (
        <section className="header">
            <h2 className="hidden">Header</h2>
            <img src={logoImage} alt="logo" className="header__logo" width="60"/>
            <ul className="navigation">
                <li className="navigation__item"><NavLink to='/contact'>Contact us</NavLink></li>
                <li className="navigation__item"><NavLink to='/'>Products</NavLink></li>
            </ul>
        </section>
    )
}

export default Header;
