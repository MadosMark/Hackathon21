import React from 'react';
import Navbar from '../components/nav';
import '../views/about.css';
import Aboutnav from '../components/aboutNav';


function Mark () {
return (
<>
<section className="aboutDiv">
<Navbar></Navbar>
 <h3>Mark</h3>
    <Aboutnav></Aboutnav>
 <p className="description">Jag har varit delaktig i detta projektet som Webbutvecklare. Projektet har varit ett grupparbete och alla har haft sin del att fokusera på under projektets gång. Vi har haft morgonmöte varje dag och stämt av hur långt alla kommit och vad som skulle göras under dagen. Hemsidan är utvecklad i ramverket React och är interaktiv, responsiv och visuellt anpassad för enklast läsbarhet. Projektet har fått mig att lära mig mycket både som Webbutvecklare och som gruppmedlem. Vårat samarbete funkade bra och vi kom fram till ett coolt slutresultat. </p>
 </section>
</>
);

};

export default Mark;