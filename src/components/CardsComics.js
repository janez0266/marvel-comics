import React from "react";
import star from "../images/star_favorite_white.png";
import {mostrarImagen} from "../APIS/MarvelKey"
import {useDispatch} from "react-redux";
import {getComicFull} from "../APIS/ComicsAPI"
import {showComicFull} from "../APIS/ToolsReducer"
import "./CardsComics.css";
import {verify} from "../utils/Constants"


const CardsComics = (props) => {

  const dispatch = useDispatch();
  if (props.cardItems.length === 0) {
    return (
      <div className="modal-list">
          <h1>... No hay Comics que mostrar ....  </h1>
      </div>
      )}
  return (
    <>
      {props.cardItems &&
        props.cardItems.map((item, idx) => (
          <div
            className="cards"
            key={idx}
            style={{ display: `${props.estado ? "flex" : "none"}`}} 
            onClick={() => {
              dispatch(showComicFull());
              console.log(item);
              dispatch(getComicFull(item.id, item.title, item.description, 
                 mostrarImagen(item.thumbnail.path + "." + item.thumbnail.extension), 
                 verify(item.dates[0].date), 
                 verify(item.creators.items[0].name), 
                 verify(item.creators.items[2].name), 
                 verify(item.creators.items[3].name), 
                 verify(item.urls[0].url) ))              
              
              }   }>
            <div className="cardImage"  >
             
              <img
                src={mostrarImagen(
                  item.thumbnail.path + "." + item.thumbnail.extension )}>
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