import React from 'react';
import Aboutnav from '../components/aboutNav';
import Navbar from '../components/nav';
import '../views/about.css';



function About () {
return (
<>
<Navbar></Navbar>
<section className="aboutDiv">
 <h3 className="aboutUs"> Om Oss</h3>
<div className="aboutContainer">
 </div>
<Aboutnav></Aboutnav>
<p className="tryck">(Tryck på ett namn för att veta mer)</p>
 </section>
</>
);

};

export default About;