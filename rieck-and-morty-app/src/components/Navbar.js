// Importación de React
import React from 'react';

// Definición del componente funcional Navbar
const Navbar = ({ brand }) => {
    // Renderizado del componente
    return (
        // Contenedor de navegación con un fondo oscuro
        <nav className="navbar navbar-dark bg-dark">
            {/* Contenedor interno de la barra de navegación */}
            <div className="conatiner"> {/* (Error tipográfico: debería ser "container" en lugar de "conatiner") */}
                {/* Enlace de marca con un estilo de texto en mayúsculas */}
                <a className="navbar-brand text-uppercase" href="/">
                    {/* Contenido de la marca (puede ser un componente, en este caso, se pasa como prop) */}
                    {brand}
                </a>
            </div>
        </nav>
    );
};

// Exportación del componente Navbar
export default Navbar;
