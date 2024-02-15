import { useEffect, useState } from "react";
import { Editar } from "./Editar";

export const Listado = ({ listadoState, setListadoState }) => {
  // const [listadoState, setListadoState] = useState([]);
  const [editar, setEditar] = useState(0);

  useEffect(() => {
    console.log("componentes de listado de peliculas cargado!!");
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas);
    return peliculas;
  };
  const borrarPeli = (id) => {
    // Conseguir peliculas almacenadas
    const pelis_almacenadas = conseguirPeliculas();

    // Filtrar esas peliculas para que elimine del array lo que no quiero
    let nuevo_array_peli = pelis_almacenadas.filter(
      (peli) => peli.id !== parseInt(id)
    );

    // Actualizar estado del listado
    setListadoState(nuevo_array_peli);

    // Actualizar los datos del localstorage
    localStorage.setItem("pelis", JSON.stringify(nuevo_array_peli));
  };

  return (
    <>
      {listadoState != null ? (
        listadoState.map((peli) => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>
              <button
                className="edit"
                onClick={() => {
                  setEditar(peli.id);
                }}
              >
                Editar
              </button>
              <button className="delete" onClick={() => borrarPeli(peli.id)}>
                Borrar
              </button>
              {/* Aparece un formulario de editar */}
              {editar === peli.id && (
                <>
                  <h1>Formulario</h1>
                  <Editar peli={peli} conseguirPeliculas= {conseguirPeliculas} setEditar={setEditar} setListadoState= {setListadoState} />
                </>
              )}
            </article>
          );
        })
      ) : (
        <h2>No hay peliculas para Mostrar</h2>
      )}
    </>
  );
};
