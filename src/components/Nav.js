import React from "react";
import logo from "../images/logo.png";
import star from "../images/star_favorite.png";
import './Nav.css';
import Buscador from "./Buscador";
import Modal from "./Modal";




const Nav = () => {

	return (
		<div className="nav">
			<div className="logo">
				<a href="#miModal"><img src={logo} alt="" width="120" height="70"></img></a>
			</div>
			<div>
				
				<Modal />
			</div>
			<Buscador />
			<div className="star">
				<img src={star} alt="" ></img>
			</div>
		</div>
	)

}

export default Nav;