import React from "react";
import PropTypes from "prop-types";
import { mostrarImagen } from "../APIS/MarvelKey";
import "../styles/CardsComics.css";
import CardStarComic from "./CardStarComic";
import { useHistory, useRouteMatch } from "react-router";

const CardsComics = ({ comic }) => {
  let { url } = useRouteMatch();
  const history = useHistory();
  return (
    <div className="cardsC" key={comic.id} style={{ display: "flex" }}>
      <div
        className="cardImageC"
        onClick={() => {
          history.push(`${url}/${comic.id}`);
          console.log(comic.id)
        }}
      >
        <img
          src={mostrarImagen(
            comic.thumbnail.path + "." + comic.thumbnail.extension
          )}
        />
      </div>
      <CardStarComic itemComicValues={comic} />
      <div className="nameC">
        <h2>{comic.title}</h2>
      </div>
    </div>
  );
};

CardsComics.propTypes = {
  estado: PropTypes.bool,
  cardItems: PropTypes.array,
  item: PropTypes.shape({
      name: PropTypes.string,
      thumbnail: PropTypes.shape({
        path: PropTypes.string,
        extension: PropTypes.string
      })
    })

}

export default CardsComics;


