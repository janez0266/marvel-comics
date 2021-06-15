import React from 'react'
import { useDispatch } from 'react-redux';
import { buscarComics } from '../actions/CharacterActions';
import { mostrarImagen } from '../APIS/MarvelKey';
import CardStarCharacter from './CardStarCharacter';
import "../styles/Cards.css"


const CardsCharacter = ({ personaje }) => {
    const dispatch = useDispatch();
    return (
      <div className="cards" style={{ display: "flex" }}>
        <div
          className="cardImage"
          onClick={() => {
            dispatch(buscarComics(personaje));}} >
            <img src={mostrarImagen( personaje.thumbnail.path + 
              "." + personaje.thumbnail.extension)}/>
        </div>
        <CardStarCharacter itemValues={personaje} />
        <div className="name">
          <h2>{personaje.name}</h2>
        </div>
      </div>
    );
  };

export default CardsCharacter