import React from 'react';
import { Link } from 'react-router-dom';
import '../components/nav.css';

const Navbar = (props) => {
return (
    <div className="navDiv">
        <nav className="navy">
            <ul className="navBar">
                <li>
                <Link to ={"/"} className="navyBar">Hem</Link>
                </li> 
                <li>
                <Link to={"/video"} className="navyBar">Spel</Link>
                </li>
                <li>
                <Link to={"/about"} className="navyBar">Om Oss</Link>
                </li>
                <li>
                    <a className="navyBar" href="https://www.yrgo.se/"> Yrgo </a>
                </li>
            </ul>
        </nav>
    </div>

);
}

export default Navbar;