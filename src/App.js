import React, { useEffect, useState } from "react";

import { FormDate } from "./components/FormDate";
import "./App.css";
import { ListDate } from "./components/ListDate";

function App() {
  const initialState = JSON.parse(localStorage.getItem("citas"));

  const [citas, setCitas] = useState(initialState);

  useEffect(() => {
    JSON.parse(localStorage.getItem("citas"))
      ? localStorage.setItem("citas", JSON.stringify(citas))
      : localStorage.setItem("citas", JSON.stringify([]));
  }, [citas]);

  const handleDelete = (id) => {
    setCitas(citas.filter(cita => cita.id !== id))
  };

  return (
    <div className="app">
      <h1>Adminsitración de pacientes</h1>
      <div className="app__container">
        {/* Formulario de Citas */}
        <div className="app__formDate">
          <h2>Crear cita</h2>
          <FormDate setCitas={setCitas} />
        </div>
        {/* Lista de cartas */}
        <div className="app__listDate">
          <h2>Administra tus citas</h2>
          <div className="app__listCards">
            {citas.map((cita) => (
              <ListDate key={cita.id} cita={cita} handleDelete={handleDelete} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
