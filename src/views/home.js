import React from 'react';
import Navbar from '../components/nav';
import './home.css';
import logo from '../images/logo.png';
import heart from '../images/heart.png';
import yrgo from '../images/yrgo.png';
import spridavarme from '../images/spridavarme.png';



function Home () {
return (
<>

<section className="HomeContainer">
 <div> 
</div>
<img className="spridavarme" src={spridavarme} alt="Spridavarme" />
<Navbar></Navbar>
<img className="imageHeart" src={heart} alt="Heart" />
 <footer className="fot">
<a className="linkSafe" href="https://raddningsmissionen.se/" ><img className="imageSafe" src={logo} alt="Logo" /></a>
<a  className="linkYrgo" href="https://www.yrgo.se/"><img className="imageYrgo" src={yrgo} alt="Yrgo" /></a>
 </footer>
 </section>
 
</>
);

};

export default Home;