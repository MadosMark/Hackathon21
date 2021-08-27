import React from 'react';
import Navbar from '../components/nav';
import '../views/about.css';
import Aboutnav from '../components/aboutNav';


function Matilda () {
return (
<>
<section className="aboutDiv">
<Navbar></Navbar>
 <h3>Matilda</h3>
    <Aboutnav></Aboutnav>
 <p className="description">I projektet har jag som manusförfattare utvecklat idé, story och struktur samt skrivit manus för spelet.
</p>
 </section>
</>
);

};

export default Matilda;