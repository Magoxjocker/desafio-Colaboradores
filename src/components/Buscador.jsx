import React, { useState } from "react";

const Buscador = ({palabra, setPalabra }) => {
  
  

  return (
    <div className="mb-5 text-center bg-success p-2 text-white rounded bg-opacity-50">
      <h2>Busqueda de Colaboradores 
      <i class="fa-solid fa-magnifying-glass p-2"></i>
      </h2>
      <input
        className="form-control w-50"
        type="text"
        placeholder="buscar... "
        value={palabra}
        onChange={(e) => setPalabra(e.target.value)}
      />
    </div>
  );
};

export default Buscador;