import React, { useState } from "react";
import TableRow from "./TableRow";

const Tabla = ({ usuarios, palabra }) => {

  let results = [];
  if (!palabra) {
    results = usuarios;
  } else {
    results = usuarios.filter(
      (user) =>
        user.name.toLowerCase().includes(palabra.toLowerCase()) ||
        user.email.toLowerCase().includes(palabra.toLowerCase())
    );

  }

  return (
    <div className="text-center">
      
      <h2 className="mb-4 bg-success p-2 text-white rounded">Lista de Colaboradores 
      <i class="fa-solid fa-list p-2"></i></h2>

      <table className="table table-striped table-hover mt- shadow-lg ">
        <thead className="bg-success text-white">
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {results.length > 0 ? (
            results.map((user) => <TableRow key={user.id} user={user} />)
          ) : (
            <tr>
              <td>No hay resultados</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;