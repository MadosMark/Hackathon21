import React from 'react';
import Aboutnav from '../components/aboutNav';
import Navbar from '../components/nav';
import '../views/about.css';



function About () {
return (
<>
<section className="aboutDiv">
<div className="aboutContainer">
 <h3 className="aboutUs"> Om Oss</h3>
<Navbar></Navbar>
 </div>
<h4 className="tryck">(Tryck på ett namn för att veta mer)</h4>
<Aboutnav></Aboutnav>
 </section>
</>
);

};

export default About;