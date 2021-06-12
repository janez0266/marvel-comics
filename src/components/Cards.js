import React from "react";
import PropTypes from "prop-types";
import { mostrarImagen } from "../APIS/MarvelKey";
import "../styles/Cards.css";
import CardStar from "./CardStar";

const NoCharacters = () => (
  <div className="cards">
    <h1>... No hay personajes que mostrar .... </h1>
  </div>
);

const Cards = (props) => {
  if (props.cardItems?.length === 0 || props.cardItems === null)
    return <NoCharacters />;
  return (
    <>
      {props.cardItems &&
        props.cardItems.map((item, idx) => (
          <div className="cards" key={idx} style={{ display: `${props.estado ? "flex" : "none"}` }}>
            <div className="cardImage" onClick={() => props.handleOpenModal(item)} >
              <img src={mostrarImagen(item.thumbnail.path + "." + item.thumbnail.extension)} />
            </div>
              <CardStar itemValues={item} />  
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
