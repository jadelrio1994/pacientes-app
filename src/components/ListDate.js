import React from "react";
import "./ListDate.css";

export const ListDate = ({ cita, handleDelete }) => {

  const { petName, name, date, time, sintomas } = cita;

  return (
    <div className="list__card">
      <div className="list__line">
        <p>
          <strong>Mascota: </strong> {petName}
        </p>
      </div>
      <div className="list__line">
        <p>
          <strong>Dueño: </strong> {name}
        </p>
      </div>
      <div className="list__line">
        <p>
          <strong>Fecha: </strong> {date}
        </p>
      </div>
      <div className="list__line">
        <p>
          <strong>Hora: </strong> {time}
        </p>
      </div>
      <div className="list__line">
        <p>
          <strong>Sintomas: </strong> {sintomas}
        </p>
      </div>
      <button className="list__eliminar" onClick={() => handleDelete(cita.id)}>
        Eliminar
      </button>
    </div>
  );
};
