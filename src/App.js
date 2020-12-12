import React from "react";
import "./App.css";
import Lista from "./components/Lista";
import Buscar from "./components/Buscar";
import Barra from "./components/Barra";

function App() {
  const nombreUsuario = "The Evil";

  const correo = "evil@test.com";

  return (
    <>
      <Barra usuario={nombreUsuario} correo={correo} />
      <Buscar />
      <Lista />
    </>
  );
}

export default App;
