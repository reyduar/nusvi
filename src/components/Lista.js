import React, { useState, useEffect } from "react";

function Lista() {
  const [count, setCount] = useState(1);
  const [recetas, setRecetas] = useState([]);

  const obtenerListaRecetas = () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`;
    return fetch(url).then((response) => response.json());
  };

  const agregarReceta = () => {
    const nuevaReceta = {
      nombre: "The Evil",
      receta: "Diablo receta",
      imagen:
        "https://www.thecocktaildb.com/images/media/drink/3k9qic1493068931.jpg",
    };
    setRecetas([...recetas, nuevaReceta]);
  };

  useEffect(() => {
    obtenerListaRecetas().then(
      ({ drinks }) => {
        setRecetas(drinks);
      },
      (error) => console.error(new Error("Hubo un error" + error))
    );
  }, []);

  return (
    <>
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={agregarReceta}>Agregar nueva receta</button>
      <h1>Total de Recetas ({recetas.length})</h1>
      <ul className="lista">
        {recetas.map((item) => (
          <li className="listaFila" key={item.idDrink}>
            <img src={item.strDrinkThumb} />
            <h3>{item.strDrink}</h3>
            <p>{item.strInstructions}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Lista;
