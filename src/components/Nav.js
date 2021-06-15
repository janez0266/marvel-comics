import React from "react";
import logo from "../images/logo.png";
import home from "../images/home.png";
import "../styles/Nav.css";
import Buscador from "./Buscador";
import { useHistory } from "react-router-dom";
import { selectFavoriteStarNav } from "../reducers/FavoriteReducer";
import { useSelector } from "react-redux";
import Tooltip from '@material-ui/core/Tooltip';

const Nav = () => {
  const history = useHistory();
  const showFavoriteStar = useSelector((store) => store.favorite.favoriteStarNav)
  return (
    <div className="nav">
      <Tooltip title="Ir a la página de Marvel" arrow leaveDelay={400}>
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
      </Tooltip>
      <Tooltip title="Ir al Inicio" arrow>
        <div className="homeIcon">
          <img
            src={home}
            alt=""
            width="120"
            height="70"
            onClick={() => history.push("/")}
          ></img>
        </div>
      </Tooltip>
      <Buscador />
      <Tooltip title="Ir a la lista de Favoritos" arrow leaveDelay={400}>
        <div className="star" 
          onClick={() => { if(showFavoriteStar)  history.push("/favoritos") } }>
          <img src={selectFavoriteStarNav()} alt="" />
        </div>
      </Tooltip>
    </div>
  );
};
export default Nav;
