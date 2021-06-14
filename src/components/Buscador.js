import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import loupe from "../images/loupe.svg";
import "../styles/Buscador.css";

const Buscador = () => {
  const [value, setValue] = useState("");
  const history = useHistory();
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/busqueda/${value}`)
  };

  return (
    <div className="buscar">
      <img src={loupe} alt="" className="form-loupe_icon"></img>
      <div className="inputArea">
        <form onSubmit={handleSubmit}>
          <input type="text" value={value} placeholder="Buscar" onChange={handleChange} />
        </form>
      </div>
    </div>
  );
};
export default Buscador;
