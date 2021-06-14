import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showNavFavoriteStar } from "../reducers/FavoriteReducer";
import { getCharactersAccion } from "../actions/CharacterActions";
import CardsCharacter from "../components/CardsCharacter";
import "../styles/Galeria.css"

const Home = () => {
  const dispatch = useDispatch();
  const personajes = useSelector((state) => state.personajes.array) || [];
  useEffect(() => {
    dispatch(showNavFavoriteStar());

    dispatch(getCharactersAccion());
  }, []);
  return (
    <div className="contenedor">
      {personajes.length > 0 &&
        personajes.map((personaje) => (
          <CardsCharacter personaje={personaje} key={personaje.id} />
        ))}
    </div>
  );
};

export default Home;
