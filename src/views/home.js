import React from 'react';
import Navbar from '../components/nav';
import './home.css';
import logo from '../images/logo.png';
import heart from '../images/heart.png';



function Home () {
return (
<>
<section className="HomeContainer">
 <div> 
</div>
<img className="imageHome" src={logo} alt="Logo" />
<Navbar></Navbar>
<img className="imageHeart" src={heart} alt="Heart" />
 </section>
</>
);

};

export default Home;