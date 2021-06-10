import React from "react";
import star from "../images/star_favorite_white.png";
import {mostrarImagen} from "../APIS/MarvelKey"
import "./Cards.css";

// function addCharToFavorite(name, id, img) {

//   var miObjetoFav = { 'name': name, "id": id, "img": img };
//   var datos_existentes = localStorage.getItem('favPersonajes');
//   // //datos_existentes = datos_existentes === null ? [] : JSON.parse(datos_existentes);
//   datos_existentes = datos_existentes === null ? [] : datos_existentes;
//   //datos_existentes.push(miObjetoFav);
 
//   // //localStorage.setItem('favPersonajes', JSON.stringify(datos_existentes));
//   localStorage.setItem('favPersonajes', datos_existentes);

//   //console.log('objeto: ', miObjetoFav);

//   //var guardado = localStorage.getItem('datos');
  

// }



const Cards = (props) => {
  if (props.cardItems.length === 0) {
    return (
      <div className="modal-list">
          <h1>... No hay personajes que mostrar ....  </h1>
      </div>
      )}
  return (
    <>
      {props.cardItems &&
        props.cardItems.map((item, idx) => (
          <div
            className="cards"
            key={idx}
            onClick={() => props.handleOpenModal(item)}
            style={{ display: `${props.estado ? "flex" : "none"}`} }>
            <div className="cardImage"     >

{/* onClick={addCharToFavorite(item.name, item.id, mostrarImagen(
                  item.thumbnail.path + "." + item.thumbnail.extension,
                  props.urlKey
                ) )} */}

              <img 
                src={mostrarImagen(
                  item.thumbnail.path + "." + item.thumbnail.extension)}>
              </img>
            </div>
            <div className="starCard">
              <img src={star}></img>
            </div>
            <div className="name">
              <h2>{item.name}</h2>
            </div>
          </div>
        ))}
    </>
  );
};

export default Cards;
