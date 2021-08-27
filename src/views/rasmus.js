import React from 'react';
import Navbar from '../components/nav';
import '../views/about.css';
import Aboutnav from '../components/aboutNav';


function Rasmus () {
return (
<>
<section className="aboutDiv">
<Navbar></Navbar>
 <h3>Rasmus</h3>
    <Aboutnav></Aboutnav>
 <p className="description">I detta projekt har jag varit UX Designer och projektledare.<br></br> Jag har lett idégenerering, samarbetat med webbutvecklare och fått upp en hemsida, sett över UI:n. Som projektledare har min stora utmaning varit att få allting att gå ihop till en färdig produkt och samtidigt jobba med andra spetskompetenser.<br></br> Att få en uppfattning om hur deras arbetssätt gick till var viktigt för att kunna göra upp en tidsplan för veckan. Vi stötte fortfarande på problem, men jag tycker att vi samarbetade bra i våran grupp och löste våra problem tillsammans.</p>
 </section>
</>
);

};

export default Rasmus;