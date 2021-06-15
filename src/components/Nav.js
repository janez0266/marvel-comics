import React from "react";
import logo from "../images/logo.png";
import home from "../images/home.png";
import "../styles/Nav.css";
import Buscador from "./Buscador";
import { useHistory } from "react-router-dom";
import { selectFavoriteStarNav } from "../reducers/FavoriteReducer";
import { useSelector } from "react-redux";

const Nav = () => {
  const history = useHistory();
  const showFavoriteStar = useSelector((store) => store.favorite.favoriteStarNav)
  return (
    <div className="nav">
      <div className="logo">
      <a href="https://www.marvel.com/" target="_blank" rel="noreferrer" >
        <img
          src={logo}
          alt=""
          width="120"
          height="70"
          onClick={() => history.push("/")}
        ></img>
        </a>
      </div>
      <div className="homeIcon">
        <img
          src={home}
          alt=""
          width="120"
          height="70"
          onClick={() => history.push("/")}
        ></img>
      </div>
      <Buscador />
      <div className="star" onClick={() => { if(showFavoriteStar)  history.push("/favoritos") } }>
        <img src={selectFavoriteStarNav()} alt="" />
      </div>
    </div>
  );
};
export default Nav;
