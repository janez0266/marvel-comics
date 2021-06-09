import React from "react";
import star from "../images/star_favorite_white.png";
import BackImg from "../images/marvel-characters.jpg";
import "./CardsComics.css";

function mostrarImagen(imagenPath, imagenKey) {
  const badImage =
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";

  if (badImage === imagenPath) {
    return BackImg;
  } else {
    return imagenPath + "?" + imagenKey;
  }
}

const CardsComics = (props) => {
  if (props.cardItems.length === 0) {
    return (
      <div className="modal-list">
          <h1>... No hay datos que mostrar ....</h1>
      </div>
      )}
  return (
    <>
      {props.cardItems &&
        props.cardItems.map((item, idx) => (
          <div
            className="cards"
            key={idx}
            // onClick={() => props.handleOpenModal(item)}
            style={{ display: `${props.estado ? "flex" : "none"}`} }>
              {console.log("estado ventanas cardspersonajes: ", props.estado)}
            <div className="cardImage">
              <img
                src={mostrarImagen(
                  item.thumbnail.path + "." + item.thumbnail.extension,
                  props.urlKey
                )}>
              </img>
            </div>
            <div className="starCard">
              <img src={star}></img>
            </div>
            <div className="name">
              <h2>{item.title}</h2>
            </div>
          </div>
        ))}
    </>
  );
};

export default CardsComics;