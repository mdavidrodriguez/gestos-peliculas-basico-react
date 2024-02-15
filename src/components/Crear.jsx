import { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

export const Crear = ({ setListadoState }) => {
  const tituloComponente = "Añadir Pelicula";
  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: "",
  });

  const { titulo, descripcion } = peliState;
  const handleDatosForm = (e) => {
    e.preventDefault();

    // Conseguir datos del formulario
    const target = e.target;
    const titulo = target.titulo.value;
    const descripcion = target.descripcion.value;

    // Crear objeto de la pelicula a guardar
    const peli = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };
    // Guardar estado
    setPeliState(peli);

    // Actualizar estado del listado principal
    setListadoState((elementos) => {
      return [...elementos, peli];
    });

    // Guardar en el almacenamiento local
    GuardarEnStorage("pelis", peli);
  };

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
      <strong>
        {" "}
        {titulo && descripcion && "Has credo la pelicula: " + titulo}
      </strong>
      <form onSubmit={handleDatosForm}>
        <input type="text" id="titulo" name="titulo" placeholder="Titulo" />
        <textarea
          name="descripcion"
          id="descripcion"
          placeholder="descripcion"
        ></textarea>
        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
};
