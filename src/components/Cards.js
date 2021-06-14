import React from "react";
import PropTypes from "prop-types";
import { mostrarImagen } from "../APIS/MarvelKey";
import "../styles/Cards.css";
import CardStarCharacter from "./CardStarCharacter";

const Cards = (props) => {
  return (
    <>
      {props.cardItems &&
        props.cardItems.map((item, idx) => (
          <div className="cards" key={idx} style={{ display: `${props.estado ? "flex" : "none"}` }}>
            <div className="cardImage" onClick={() => props.handleOpenModal(item)} >
              <img src={mostrarImagen(item.thumbnail.path + "." + item.thumbnail.extension)} />
            </div>
              <CardStarCharacter itemValues={item} />  
            <div className="name">
                <h2>{item.name}</h2>
            </div>
          </div>
        ))}
    </>
  );
};

Cards.propTypes = {
  estado: PropTypes.bool,
  cardItems: PropTypes.array,
  item: PropTypes.shape({
    name: PropTypes.string,
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string,
    }),
  }),
};

export default Cards;
//TODO Eliminar si no hace falta Cards