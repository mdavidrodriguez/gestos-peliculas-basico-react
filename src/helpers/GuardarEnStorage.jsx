export const GuardarEnStorage = (clave, elemento) => {
    // conseguir los elementos que ya estan en localstorage
    let elementos = JSON.parse(localStorage.getItem(clave));
    console.log(elemento);

    // Comprobar si es un array
    if (Array.isArray(elementos)) {
      // Guardar dentro del array un elemento nuevo
      elementos.push(elemento);
    } else {
      // Crear un array con la nueva peli
      elementos = [elemento];
    }

    // Guardar en el localstorage
    localStorage.setItem(clave, JSON.stringify(elementos));

    // Devolver objeto guardado
    return elemento;
  };
