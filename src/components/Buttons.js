import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {siguienteCharacterAccion,
  anteriorCharacterAccion} from "../actions/CharacterActions";
import {anteriorComicsAccion, siguienteComicsAccion} from "../actions/ComicsActions";
import "../styles/Buttons.css";
import {useHistory, useRouteMatch} from "react-router-dom";
import useParams from "../hooks/useParams";

const Buttons = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { input } = useParams("/busqueda/:input");
  const isInFavoritePage = useRouteMatch("/favoritos");
 
  const isAComicPage =
    useRouteMatch("/busqueda/:input/comics") ||
    useRouteMatch("/favoritos/comics");
  const isInRoot = useRouteMatch({ path: "/", exact: true });

  const isInCharacter = useRouteMatch({path: "/busqueda/:input", exact: true}) || 
    useRouteMatch({path: "/favoritos", exact: true})
  const isInComics = useRouteMatch("/busqueda/:input/comics") ||
    useRouteMatch("/favoritos/comics");
  if(isInRoot) return null
  return (
    
    <div className="buttons">

      <div className="navButtons"  style={ isInFavoritePage ? {display: "none",} : {display: "flex",} }    >
        <div className={isAComicPage ? "scrollButtons-comics" : "scrollButtons"}>
          <p onClick={() =>isAComicPage ? dispatch(anteriorComicsAccion()) : dispatch(anteriorCharacterAccion())}>
            &lt;&lt; Back
          </p>
          <p onClick={() =>isAComicPage ? dispatch(siguienteComicsAccion()) : dispatch(siguienteCharacterAccion())}>
            Next &gt;&gt;
          </p>
        </div>
      </div>



      
      <div className="showCharactersComicsButtons">
        <p className="personajes" style={ isInCharacter ? {background: "red",} : {background: "white",} }
        onClick={() => history.push(isInFavoritePage ? "/favoritos" : `/busqueda/${input}`)}>
          Personajes
        </p>
        <p className="comics" style={ isInComics ? {background: "red",} : {background: "white",} }
          onClick={() => history.push(isInFavoritePage ? "/favoritos/comics" : `/busqueda/${input}/comics`)}>
          Comics
        </p>
      </div>
    </div>
  );
};
Buttons.propTypes = {
  estado: PropTypes.bool,
  scrollButtonCard: PropTypes.bool,
};
export default Buttons;
