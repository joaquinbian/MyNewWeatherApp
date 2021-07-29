import React from "react";
import "./About.css";

function About() {
  return (
    <div className="d-flex justify-content-center">
      <div className="aboutContainer">
        <h1 className="aboutTitle">The Weather App</h1>
        <div>
          <h5>
            Esta app esta destinada a mostrar el clima de las ciudades que
            ustedes deseen buscar en la barra de navegacion. Ustedes pueden
            usarla por el motivo que les plazca, ya sea por curiosidad, para
            saber como esta el tiempo en el lugar que vas a visitar en tus
            proximas vacaciones, lo que sea.
          </h5>
        </div>
      </div>
    </div>
  );
}
export default About;
