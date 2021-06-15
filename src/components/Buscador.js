import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import loupe from "../images/loupe.svg";
import "../styles/Buscador.css";
import Tooltip from '@material-ui/core/Tooltip';

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
  const ayuda = "Escribe el nombre del Personaje a buscar,  " + 
        "también se buscarán coincidencias en Comics. Ejemplo: " + 
        "colocar SPIDER buscará a los personajes y Comics que lo contengan. " + 
        "Tambien se puede buscar directamente en el navegador, colocando: " +
        "http://midominio.com/busqueda/spider o buscar y ver los comics del Personaje: " + 
        "http://midominio.com/busqueda/spider/comics"
  return (
    <div className="buscar">
      <Tooltip title={ayuda} arrow leaveDelay={400} >
        <img src={loupe} 
            alt="" 
            className="form-loupe_icon"/>
      </Tooltip>
      <div className="inputArea">
        <form onSubmit={handleSubmit}>
          <input type="text" 
              value={value} 
              placeholder="Buscar" 
              onChange={handleChange} />
        </form>
      </div>
    </div>
  );
};
export default Buscador;
