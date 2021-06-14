import React, { useEffect } from "react";
import {
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getComicsByNameAccion } from "../actions/ComicsActions";
import { getCharactersByNameAccion } from "../actions/CharacterActions";
import CardsCharacter from "../components/CardsCharacter";
import ComicsFull from "../components/ComicsFull";
import CardsComics from "../components/CardsComics";

const Busqueda = () => {
  const dispatch = useDispatch();
  const { input } = useParams();
  let { path, url } = useRouteMatch();
  const personajes = useSelector((store) => store.personajes?.array) || [];
  const comics = useSelector((store) => store.comics.arrayComics);
  const comicFullInfo = useSelector((store) => store.comics.arrayComicFull);

  useEffect(() => {
    dispatch(getCharactersByNameAccion(input)); //Busca por personajes
    dispatch(getComicsByNameAccion(input)); //Busca por comics
  }, [input]);

  return (
    <div className="contenedor">
      <Switch>
        {/* Esta ruta es la de los resultados de busqueda de personajes */}
        <Route exact path={path}>
          {personajes.length > 0 &&
            personajes.map((personaje) => (
              <CardsCharacter personaje={personaje} key={personaje.id} />
            ))}
        </Route>
        {/* Ruta de resultador de comics */}
        <Route exact path={`${path}/comics`}>
          {comics.length > 0 &&
            comics.map((comic) => <CardsComics comic={comic} key={comic.id} />)}
        </Route>
        <Route exact path={`${path}/comics/${comicFullInfo.id}`}>
          <p>hola</p>
          <ComicsFull comicFull={comicFullInfo} pathBack={`${url}/comics`} />
        </Route>
      </Switch>
    </div>
  );
};

export default Busqueda;
