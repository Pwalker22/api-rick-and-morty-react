// Importaciones de React y componentes necesarios
import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import Pagination from './components/Pagination';
import './components/index.css';

// Definición del componente principal
function App() {
  // Estados para almacenar la lista de personajes y la información de paginación
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  // URL inicial de la API de Rick and Morty
  const initialUrl = "https://rickandmortyapi.com/api/character";

  // Referencia para el campo de búsqueda
  const search = useRef(null);

  // Función para obtener personajes de la API
  const fetchCharacters = (url) => {
    // Realiza una solicitud a la API, actualiza los estados con los resultados
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  // Funciones para cargar la página anterior y siguiente de personajes
  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  // Efecto de montaje para cargar personajes iniciales
  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  // Función para buscar personajes por nombre
  const searchCharacter = () => {
    // Imprime el valor del campo de búsqueda en la consola
    console.log(search.current.value);
    // Realiza una solicitud a la API con el nombre como parámetro de búsqueda
    fetchCharacters(initialUrl + "/?name=" + search.current.value);
  };

  // Estructura del componente principal
  return (
    <div>
      {/* Barra de navegación y formulario de búsqueda */}
      <div className="bg-dark">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            {/* Barra de navegación con un componente de marca que incluye una imagen */}
            <Navbar brand={<BrandWithImage />} className="text-light" />
            {/* Formulario de búsqueda con campo de entrada y botón */}
            <div className="d-flex">
              <input
                type="text"
                ref={search}
                className="form-control"
                placeholder="Buscar personaje"
                style={{ backgroundColor: "#343a40", color: "white" }}
              />
              <button onClick={searchCharacter} className="btn btn-primary ml-2 rick-morty-button">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Contenedor principal con paginación, lista de personajes y paginación nuevamente */}
      <div className="container mt-4">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        {/* Componente que muestra la lista de personajes */}
        <Characters characters={characters} />
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      </div>
    </div>
  );
}

// Componente funcional que muestra el logo de Rick and Morty
const BrandWithImage = () => {
  return (
    <div className="d-flex align-items-center">
      <img
        src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png" // Reemplaza con la ruta correcta de tu imagen
        alt="Logo"
        style={{ height: '130px', marginRight: '110px' }}
      />
    </div>
  );
};

// Exporta el componente principal
export default App;
