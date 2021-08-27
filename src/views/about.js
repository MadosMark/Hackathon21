import React from 'react';
import Aboutnav from '../components/aboutNav';
import Navbar from '../components/nav';
import '../views/about.css';



function About () {
return (
<>
<section className="aboutDiv">
<Navbar></Navbar>
 <h3 className="aboutUs"> Om Oss</h3>
<div className="aboutContainer">
 </div>
<Aboutnav></Aboutnav>
<h4 className="tryck">(Tryck på ett namn för att veta mer)</h4>
 </section>
</>
);

};

export default About;