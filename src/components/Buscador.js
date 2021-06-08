import React, { useState } from "react";
import { getCharactersByNameAccion } from "../APIS/MarvelAPI";
import { useDispatch } from "react-redux";
import loupe from "../images/loupe.svg";
import "./Buscador.css";

const Buscador = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  // handleChange = handleChange.bind(this);
  //   handleSubmit = handleSubmit.bind(this);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ value });
    dispatch(getCharactersByNameAccion(value));
  };

  return (
    <div className="buscar">
      <img src={loupe} alt="" className="form-loupe_icon"></img>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={value} onChange={handleChange} />
        </form>
      </div>
    </div>
  );
};
export default Buscador;
