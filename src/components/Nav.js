import React from "react";
import logo from "../images/logo.png";
import '../styles/Nav.css';
import Buscador from "./Buscador";
import { useDispatch } from "react-redux";
import { getFavoritosAccion } from "../APIS/MarvelAPI";
import {mostrarEstrella} from "../utils/Constants"

const Nav = () => {
	const dispatch = useDispatch();
	return (
		<div className="nav">
			<div className="logo">
				<img src={logo} alt="" width="120" height="70"></img>
			</div>
			<Buscador />
			<div className="star" onClick={() => dispatch(getFavoritosAccion())}>
				<img src={ mostrarEstrella()} alt=""  ></img>
			</div>
		</div>
	)
}
export default Nav;