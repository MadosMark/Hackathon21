import React from 'react';
import Navbar from '../components/nav';
import '../views/about.css';
import Aboutnav from '../components/aboutNav';


function Frida () {
return (
<>
<section className="aboutDiv">
<Navbar></Navbar>
 <h3>Frida</h3>
    <Aboutnav></Aboutnav>
 <p className="description">Som Game Artist har jag arbetat med projektets visuella aspekter. Främst skapandet av grafiska komponenter till spelet. De grafiska delarna anpassades efter manus, samt strävar efter att framföra den önskade stämningen.
</p>
 </section>
</>
);

};

export default Frida;