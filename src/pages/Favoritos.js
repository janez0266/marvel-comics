import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router";
import { getFavoritosAccion } from "../actions/CharacterActions";
import CardsCharacter from "../components/CardsCharacter";
import CardsComics from "../components/CardsComics";
import {
  getFavoriteCharacters,
  getFavoriteComics,
} from "../reducers/FavoriteReducer";

const Favoritos = () => {
  const dispatch = useDispatch();
  const characters = useSelector((store) => store.favorite.arrayFavCharacter);
  const comics = useSelector((store) => store.favorite.arrayFavComics);
  const { path, url } = useRouteMatch();
  useEffect(() => {
    dispatch(getFavoriteCharacters());
    dispatch(getFavoriteComics());
  }, []);
  return (
    <div className="contenedor">
      <Switch>
        <Route exact path={path}>
          {characters.length > 0 &&
            characters.map((character) => (
              <CardsCharacter personaje={character} key={character.id} />
            ))}
        </Route>
        <Route exact path={`${path}/comics`}>
          {comics.length > 0 &&
            comics.map((comic) => <CardsComics comic={comic} key={comic.id} />)}
        </Route>
      </Switch>
    </div>
  );
};

export default Favoritos;
