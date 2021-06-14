import React from "react";
import logo from "../images/logo.png";
import "../styles/Nav.css";
import Buscador from "./Buscador";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getFavoritosAccion } from "../actions/CharacterActions";
import { mostrarEstrella } from "../utils/Constants";

const Nav = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="nav">
      <div className="logo">
        <img
          src={logo}
          alt=""
          width="120"
          height="70"
          onClick={() => history.push("/")}
        ></img>
      </div>
      <Buscador />
      <div className="star" onClick={() => history.push("/favoritos")}>
        <img src={mostrarEstrella()} alt=""></img>
      </div>
    </div>
  );
};
export default Nav;
