import React, { useState } from "react";

export const Buscador = ({ listadoState, setListadoState }) => {
  const [busqueda, setBusqueda] = useState("");
  const [encontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e) => {
    e.preventDefault();
    // Crear estado y actualizarlo
    setBusqueda(e.target.value);

    // Filtrar para buscar coincidencias
    let pelisEncontradas = listadoState.filter((peli) => {
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
    });

    if (busqueda.length <= 1 || pelisEncontradas <= 0) {
      pelisEncontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false);
    }

    setListadoState(pelisEncontradas);

    // Actualizar estado del listado principal con lo que he logrado filtrar
  };
  return (
    <div className="search">
      <h3 className="title">Buscador: {busqueda}</h3>
      {(encontrado == true && busqueda.length > 1) && (
        <span className="no-encontrado">
          No se ha encontrado ninguna coincidencia
        </span>
      )}

      <form action="">
        <input
          type="text"
          id="search_field"
          name="busqueda"
          autoComplete="off"
          onChange={buscarPeli}
        />
        <button id="search">Buscar</button>
      </form>
    </div>
  );
};
