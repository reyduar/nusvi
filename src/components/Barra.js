import React from "react";
import user from "../imagenes/user.svg";

function Barra({ usuario, correo }) {
  return (
    <div className="barra">
      <ul className="avatar">
        <li>
          <img className="userImagen" src={user}></img>
        </li>
        <li className="userName">
          {usuario} - {correo}
        </li>
      </ul>
    </div>
  );
}

export default Barra;
