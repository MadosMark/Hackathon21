import React from 'react';
import { Link } from 'react-router-dom';
import '../components/aboutNav.css';

const Aboutnav = (props) => {
return (
    <div className="abbeNav">
        <nav className="navAbout">
            <ul className="navBer">
                <li>
                <Link to={"/mark"} className="navyBor">Mark</Link>
                </li> 
                <li>
                <Link to={"/frida"} className="navyBor">Frida</Link>
                </li>
                <li>
                <Link to={"/viktor"} className="navyBor">Viktor </Link>
                </li>
                <li>
                <Link to={"/matilda"} className="navyBor">Matilda </Link>
                </li>
                <li>
                <Link to={"/rasmus"} className="navyBor">Rasmus </Link>
                </li>
            </ul>
        </nav>
    </div>

);
}

export default Aboutnav;