// Importación de React
import React from 'react';

// Definición del componente funcional Pagination
const Pagination = ({ prev, next, onPrevious, onNext }) => {

    // Función para manejar el evento de hacer clic en "Volver"
    const handlePrevious = () => {
        onPrevious(); // Llama a la función proporcionada como prop 'onPrevious'
    }

    // Función para manejar el evento de hacer clic en "Siguiente"
    const handleNext = () => {
        onNext(); // Llama a la función proporcionada como prop 'onNext'
    }

    // Renderizado del componente
    return (
        // Contenedor de navegación con un espacio vertical en la parte superior
        <nav classname="my-5"> {/* (Error tipográfico: debería ser "className" en lugar de "classname") */}
            {/* Lista de paginación centrada horizontalmente */}
            <ul className='pagination justify-content-center'>
                {/* Si hay una página anterior, muestra el botón "Volver" */}
                {prev ? (
                    <li className='page-item'>
                        <button className='page-link' onClick={handlePrevious}>Volver</button>
                    </li>
                ) : null}
                {/* Si hay una página siguiente, muestra el botón "Siguiente" */}
                {next ? (
                    <li className='page-item'>
                        <button className='page-link' onClick={handleNext}>Siguiente</button>
                    </li>
                ) : null}
            </ul>
        </nav>
    );
}

// Exportación del componente Pagination
export default Pagination;
