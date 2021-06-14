import axios from "axios";
import { urlStringKey } from "../APIS/MarvelKey";
import {
  activarModal,
  loadingWindows,
  showButtons,
  showCardsCharacters,
  showPopupWindow,
} from "./ToolsActions";

const urlBaseCharacters = "https://gateway.marvel.com:443/v1/public/characters";
const addOffset = 8;

//acciones
export const getCharactersAccion = () => async (dispatch) => {
  const offset = Math.trunc(Math.floor(Math.random() * 1000) + 1);
  const urlCharacter = `${urlBaseCharacters}?limit=8&offset=${offset}&orderBy=modified&${urlStringKey}`;
  dispatch(loadingWindows(true));
  try {
    const res = await axios.get(`${urlCharacter}`);
    dispatch({
      type: "GET_CHARACTERS",
      payload: {
        array: res.data.data.results,
      },
    });
  } catch (error) {
    console.log(error);
    dispatch(
      showPopupWindow("..Error al descargar los datos. Intente de nuevo...")
    );
  }
  dispatch(loadingWindows(false));
};

export const getCharactersByNameAccion =
  (personaje) => async (dispatch, getState) => {
    const urlCharacter = `${urlBaseCharacters}?nameStartsWith=${personaje}&limit=8&orderBy=name&${urlStringKey}`;
    dispatch(loadingWindows(true));
    try {
      const res = await axios.get(`${urlCharacter}`);
      dispatch({
        type: "GET_CHARACTER_BY_NAME",
        payload: {
          array: res.data.data.results,
          length: res.data.data.total,
          name: personaje,
          offset: 0,
        },
      });
      dispatch(showCardsCharacters());
      const exist = getState().personajes.length;
      if (exist === 0)
        dispatch(
          showPopupWindow(
            "...No hay personajes que mostrar. Intente de nuevo..."
          )
        );
      else dispatch(showButtons(true));
    } catch (error) {
      console.log(error);
      dispatch(
        showPopupWindow(
          "..Error al descargar los datos del personaje. Intente de nuevo..."
        )
      );
    }
    dispatch(loadingWindows(false));
  };

export const siguienteCharacterAccion = () => async (dispatch, getState) => {
  const offset = getState().personajes.offset;
  const name = getState().personajes.name;
  const siguiente = offset + addOffset;
  const urlCharacter = `${urlBaseCharacters}?nameStartsWith=${name}&limit=8&offset=${siguiente}&orderBy=name&${urlStringKey}`;
  const length = getState().personajes.length;

  if (siguiente >= length) {
    dispatch(showPopupWindow("..No hay mas datos que mostrar..."));
  } else {
    dispatch(loadingWindows(true));
    try {
      const res = await axios.get(`${urlCharacter}`);
      dispatch({
        type: "NEXT_CHARACTERS",
        payload: {
          array: res.data.data.results,
          offset: siguiente,
        },
      });
    } catch (error) {
      console.log(error);
      dispatch(
        showPopupWindow(
          "..Error al descargar los datos del personaje. Intente de nuevo..."
        )
      );
    }
    dispatch(loadingWindows(false));
  }
};

export const anteriorCharacterAccion = () => async (dispatch, getState) => {
  const offset = getState().personajes.offset;
  const name = getState().personajes.name;
  const siguiente = offset - addOffset;
  const urlCharacter = `${urlBaseCharacters}?nameStartsWith=${name}&limit=8&offset=${siguiente}&orderBy=name&${urlStringKey}`;

  if (siguiente < 0) {
    dispatch(showPopupWindow("..No hay mas datos que mostrar..."));
  } else {
    dispatch(loadingWindows(true));
    try {
      const res = await axios.get(`${urlCharacter}`);
      dispatch({
        type: "BACK_CHARACTER",
        payload: {
          array: res.data.data.results,
          offset: siguiente,
        },
      });
    } catch (error) {
      console.log(error);
      dispatch(
        showPopupWindow(
          "..Error al descargar los datos del personaje. Intente de nuevo..."
        )
      );
    }
    dispatch(loadingWindows(false));
  }
};

export const getFavoritosAccion = () => async (dispatch) => {
  const arrayFavoritos =
    JSON.parse(localStorage.getItem("favPersonajes")) || [];
  //const arrayFavoritos = getState().favorite.arrayFav;
  console.log(arrayFavoritos);
  dispatch({
    type: "GET_FAVORITES_CHARACTERS",
    payload: {
      array: arrayFavoritos,
    },
  });
  dispatch(showButtons(true));
};

export const buscarComics = (personaje) => async (dispatch) => {
  dispatch({ type: "SELECT_CHARACTER", payload: personaje });
  dispatch(activarModal());
};
