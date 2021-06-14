import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import { getCharactersByNameAccion } from "../actions/CharacterActions";
import { getComicsByNameAccion } from "../actions/ComicsActions";
import { useDispatch } from "react-redux";
import loupe from "../images/loupe.svg";
import "../styles/Buscador.css";

const Buscador = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  // handleChange = handleChange.bind(this);
  //   handleSubmit = handleSubmit.bind(this);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(getCharactersByNameAccion(value));   //Busca por personajes
    // dispatch(getComicsByNameAccion(value));       //Busca por comics
    history.push(`/busqueda/${value}`)
  };

  return (
    <div className="buscar">
      <img src={loupe} alt="" className="form-loupe_icon"></img>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={value} placeholder="Buscar" onChange={handleChange} />
        </form>
      </div>
    </div>
  );
};
export default Buscador;
