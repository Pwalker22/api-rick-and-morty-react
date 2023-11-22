// Importación de React
import React from "react";

// Definición de un componente funcional CharacterList
const CharacterList = ({ characters }) => {
    // Renderizado de la lista de personajes
    return (
        <div className="container">
            <div className="row">
                {/* Mapeo de cada personaje en la lista */}
                {characters.map((item, index) => (
                    // Cada personaje se representa como una tarjeta en una columna de la cuadrícula Bootstrap
                    <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="card" style={{ minWidth: "200px" }}>
                            {/* Imagen del personaje */}
                            <img className="card-img-top" src={item.image} alt="character" />
                            <div className="card-body">
                                {/* Nombre del personaje */}
                                <h5 className="card-title">{item.name}</h5>
                                <hr />
                                {/* Estado del personaje */}
                                <p className="card-text">Estado: {item.status}</p>
                                {/* Especie del personaje */}
                                <p className="card-text">Especie: {item.species}</p>
                                {/* Género del personaje */}
                                <p className="card-text">Género: {item.gender}</p>
                                {/* Ubicación del personaje */}
                                <p className="card-text">Ubicación: {item.location.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Exportación del componente CharacterList
export default CharacterList;
