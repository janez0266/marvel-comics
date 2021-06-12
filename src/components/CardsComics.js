import React from "react";
import PropTypes from 'prop-types';
import star from "../images/star_favorite_white.png";
import {mostrarImagen} from "../APIS/MarvelKey"
import {useDispatch} from "react-redux";
import {getComicFull} from "../APIS/ComicsAPI"
import {showComicFull} from "../APIS/ToolsActions"
import "../styles/CardsComics.css";
import {verify} from "../utils/Constants"


const CardsComics = (props) => {

  const dispatch = useDispatch();
  // if (props.cardItems.length === 0 || props.cardItems === null) {
  //   return (
  //     <div className="cardsC">
  //         <h1>... No hay Comics que mostrar ....  </h1>
  //     </div>
  //     )}
  return (
    <>
      {props.cardItems &&
        props.cardItems.map((item, idx) => (
          <div
            className="cardsC"
            key={idx}
            style={{ display: `${props.estado ? "flex" : "none"}`}} 
            onClick={() => {
              dispatch(showComicFull());
              dispatch(getComicFull(item.id, item.title, item.description, 
                 mostrarImagen(item.thumbnail.path + "." + item.thumbnail.extension), 
                 verify(item.dates[0].date), 
                 item.creators.items,                 
                 verify(item.urls[0].url) ))
              }   }>
            <div className="cardImageC"  >
              <img
                src={mostrarImagen(
                  item.thumbnail.path + "." + item.thumbnail.extension )}>
              </img>
            </div>
            <div className="starCardC">
              <img src={star}></img>
            </div>
            <div className="nameC">
              <h2>{item.title}</h2>
            </div>
          </div>
        ))}
    </>


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