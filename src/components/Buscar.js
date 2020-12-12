import React from "react";
import miLogo from "../imagenes/llamas.jpg";

function Buscar() {
  const handleBuscar = () => {
    alert();
  };

  return (
    <div className="App">
      <div className="cabecera">
        <img className="imagenLogo" src={miLogo}></img>
        <h1>Recetas de Tragos</h1>
        <input className="cajaTexto" placeholder="Buscar"></input>

        <button onClick={handleBuscar} className="button botonBuscar">
          Buscar
        </button>
        <br />
      </div>
    </div>
  );
}

export default Buscar;
