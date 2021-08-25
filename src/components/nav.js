import React from 'react';
import { Link } from 'react-router-dom';
import '../components/nav.css';

const Navbar = (props) => {
return (
    <div className="navDiv">
        <nav className="navy">
            <ul className="navBar">
                <li>
                <Link to ={"/"} className="navyBar">Home</Link>
                </li> 
                <li>
                <Link to={"/video"} className="navyBar">Video</Link>
                </li>
                <li>
                <Link to={"/about"} className="navyBar">About</Link>
                </li>
            </ul>
        </nav>
    </div>




);
}

export default Navbar;