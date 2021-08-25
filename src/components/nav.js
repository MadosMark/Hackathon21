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
                <Link to={"/video"} className="navyBar">Video</Link>
                </li>
                <li>
                <Link to={"/about"} className="navyBar">Om Oss</Link>
                </li>
            </ul>
        </nav>
    </div>

);
}

export default Navbar;