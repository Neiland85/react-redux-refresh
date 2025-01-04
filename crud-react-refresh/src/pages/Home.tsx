import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>¡Bienvenidos al Ganxotapa!</h1>
    <p>Disfruta de la mejor experiencia gastronómica digital.</p>
    <Link to="/tapas">Explorar Tapas</Link>
    <Link to="/resultados">Ver Resultados</Link>
    <Link to="/registro">Registrarse</Link>
  </div>
);

export default Home;

