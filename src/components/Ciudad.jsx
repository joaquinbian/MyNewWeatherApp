import React from "react";
import "./Ciudad.css";

export default function Ciudad({ city }) {
  console.log(city);
  return (
    <div className="cityContainer">
      <div className="ciudad">
        <div className="container">
          <div className="column">
            <div className="col">
              <h1 className="titleCity">{city.name}</h1>
            </div>
            <div className="row">
              <div className="col">
                <h4>Temperatura:</h4>
              </div>
              <div className="col">
                <h5>{city.temp}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4>Clima:</h4>
              </div>
              <div className="col">
                <h5>{city.weather}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4>Viento:</h4>
              </div>
              <div className="col">
                <h5>{city.wind}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4>Nubes:</h4>
              </div>
              <div className="col">
                <h5>{city.clouds}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4>Latitud:</h4>
              </div>
              <div className="col">
                <h5>{city.latitud}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4>Longitud:</h4>
              </div>
              <div className="col">
                <h5>{city.longitud}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
