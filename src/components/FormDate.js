import React, { useState } from "react";
import "./FormDate.css";

export const FormDate = ({ setCitas }) => {
  const initialState = {
    petName: "",
    name: "",
    date: "",
    time: "",
    sintomas: "",
  };

  const [formValues, setFormValues] = useState(initialState);

  const { petName, name, date, time, sintomas } = formValues;

  const handleChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCitas((c) => [
      ...c,
      {
        id: Math.round(Math.random() * 1000000),
        petName,
        name,
        date,
        time,
        sintomas,
      },
    ]);

    setFormValues(initialState);
  };

  return (
    <form className="form__formGroup">
      <label className="form__label">Nombre Mascota</label>
      <input
        name="petName"
        type="text"
        placeholder="Nombre de las Mascota"
        value={petName}
        onChange={handleChange}
        autoComplete="off"
        className="form__input"
      />

      <label className="form__label">Nombre Dueño</label>
      <input
        name="name"
        type="text"
        placeholder="Nombre del Dueño de la Mascota"
        value={name}
        onChange={handleChange}
        autoComplete="off"
        className="form__input"
      />

      <label className="form__label">Fecha</label>
      <input
        name="date"
        type="date"
        value={date}
        onChange={handleChange}
        className="form__input"
      />

      <label className="form__label">Hora</label>
      <input
        name="time"
        type="time"
        value={time}
        onChange={handleChange}
        className="form__input"
      />

      <label className="form__label">Síntomas</label>
      <textarea
        name="sintomas"
        placeholder="Diga como se siente..."
        value={sintomas}
        onChange={handleChange}
        className="form__textarea"
      ></textarea>

      <button type="submit" className="form__submit" onClick={handleSubmit}>
        Agregar cita
      </button>
    </form>
  );
};
