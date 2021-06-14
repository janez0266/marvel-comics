import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  siguienteCharacterAccion,
  anteriorCharacterAccion,
} from "../actions/CharacterActions";
import {
  siguienteComicsAccion,
  anteriorComicsAccion,
} from "../actions/ComicsActions";
import { showCardsCharacters, showCardsComics } from "../actions/ToolsActions";
import "../styles/Buttons.css";
import {
  useHistory,
  useRouteMatch,
  useLocation,
  matchPath,
} from "react-router-dom";
import useParams from "../hooks/useParams";

const Buttons = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { input } = useParams("/busqueda/:input");
  const isInFavoritePage = useRouteMatch("/favoritos");
  const isAComicPage =
    useRouteMatch("/busqueda/:input/comics") ||
    useRouteMatch("/favoritos/comics");
  const isInRoot = useRouteMatch({ path: "/", exact: true });
  console.log("esta en la razi", isInRoot);
  if(isInRoot) return null
  return (
    <div
      className="buttons"
      style={{ display: `${props.estado ? "flex" : "none"}` }}
    >
      <div className={isAComicPage ? "scrollButtons-comics" : "scrollButtons"}>
        <p
          onClick={() =>
            isAComicPage
              ? dispatch(anteriorComicsAccion())
              : dispatch(anteriorCharacterAccion())
          }
        >
          &lt;&lt; Back
        </p>
        <p
          onClick={() =>
            isAComicPage
              ? dispatch(siguienteCharacterAccion())
              : dispatch(siguienteCharacterAccion())
          }
        >
          Next &gt;&gt;
        </p>
      </div>
      {/* <div
        className="scrollButtons"
        style={{ display: `${props.scrollButtonCard ? "flex" : "none"}` }}
      >
        <p onClick={() => dispatch(anteriorCharacterAccion())}>&lt;&lt; Back</p>
        <p onClick={() => dispatch(siguienteCharacterAccion())}>
          Next &gt;&gt;
        </p>
      </div>
      <div
        className="scrollButtons-comics"
        style={{ display: `${props.scrollButtonCard ? "none" : "flex"}` }}
      >
        <p onClick={() => dispatch(anteriorComicsAccion())}>&lt;&lt; Back</p>
        <p onClick={() => dispatch(siguienteComicsAccion())}>Next &gt;&gt;</p>
      </div> */}
      <div className="showCharactersComicsButtons">
        <p
          className="personajes"
          onClick={() =>
            history.push(isInFavoritePage ? "/favoritos" : `/busqueda/${input}`)
          }
        >
          Personajes
        </p>
        {/* dispatch(showCardsCharacters()) */}
        <p
          className="comics"
          onClick={() =>
            history.push(
              isInFavoritePage
                ? "/favoritos/comics"
                : `/busqueda/${input}/comics`
            )
          }
        >
          Comics
        </p>
        {/* dispatch(showCardsComics()) */}
      </div>
    </div>
  );
};
Buttons.propTypes = {
  estado: PropTypes.bool,
  scrollButtonCard: PropTypes.bool,
};
export default Buttons;
