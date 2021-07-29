import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import About from "./components/About";
import Ciudad from "./components/Ciudad";
import { Route } from "react-router-dom";

export default function App() {
  const [cities, setCities] = useState([]);
  function onSearch(ciudad) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`
    )
      .then((rta) => rta.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          console.log(recurso);
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          const cityExist = cities.filter((c) => c.id === ciudad.id);
          if (cityExist.length > 0) {
            alert("esta ciudad ya esta incluida");
          } else {
            setCities((oldCities) => [...oldCities, ciudad]); //oldCities va hacer referencia al estado principal del componente (un array vacio)
            //y luego lo que hacemos con el spread es crear un nuevo array con el array de las ciudades anteriores y la nueva ciudad (ciudad)
          }
        } else {
          alert("ciudad no encontrada");
        }
      });
  }
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  // function onFilter(ciudadId) {
  // let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
  // if(ciudad.length > 0) {
  // return ciudad[0];
  // } else {
  // return null;
  // }
  // }
  function onFilter(id) {
    const ciudad = cities.filter((c) => c.id === parseInt(id)); //aca lo que decimos es que ciudad sea un array con las ciudades que tengan el mismo id que el id
    //que le pasamos por parametro, el di que le pasamos por parametro se ve cuando le pasamos el
    //parametro city al componente ciudad, cuyo valor es la funcion on filter con la propiedad ciudadId
    //de match.params, que es un objeto
    if (ciudad.length > 0) {
      return ciudad[0]; //((porque si pasamos solo ciudad da error? o pq si no dejamos en cities.filter.... da error tmb?))
    } else {
      return null;
    }
  }
  return (
    <div className="App">
      {/* {console.log(cities)}
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/> */}
      <Route path="/" render={() => <Nav onSearch={onSearch} />}></Route>
      <Route
        exact
        path="/"
        render={() => <Cards cities={cities} onClose={onClose} />}
      ></Route>
      <Route exact path="/about" render={About}></Route>
      <Route
        exact
        path="/ciudad/:ciudadId"
        render={({ match }) => (
          <Ciudad city={onFilter(match.params.ciudadId)} />
        )}
      ></Route>
    </div>
  );
}
