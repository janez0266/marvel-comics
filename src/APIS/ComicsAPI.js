import axios from "axios";
import MarvelKey from "./MarvelKey";
import {loadingWindows} from "../APIS/ToolsReducer"

// constantes
const dataInicial = {
    array: [],
    arrayComics: [],    
    name: "",
    length: 0
}


const urlGetKey = new MarvelKey();
const URL_STRING_KEY = urlGetKey.urlString();

const urlBaseComicsName = "https://gateway.marvel.com:443/v1/public/comics"
const urlBaseComics = "https://gateway.marvel.com:443/v1/public/characters/"

const OBTENER_COMICS_POR_ID_EXITO = "OBTENER_COMICS_POR_ID_EXITO";
const OBTENER_COMICS_POR_NOMBRE_EXITO = "OBTENER_COMICS_POR_NOMBRE_EXITO";
const SET_WAIT = "SET_WAIT";


export default function comicsReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_COMICS_POR_ID_EXITO:
            return {...state, array: action.payload.array
            }
        case OBTENER_COMICS_POR_NOMBRE_EXITO:
            return {...state, arrayComics: action.payload.arrayComics,                 
                name: action.payload.name,
                length: action.payload.length
            }       
        case SET_WAIT:
            return {...state, waitStateComics: action.payload.waitStateComics}
        default:
            return state

    }

}

//acciones
export const getComicsByIdAccion = (id) => async (dispatch) => {

  const urlCharacter = `${urlBaseComics}${id}/comics?orderBy=onsaleDate&${URL_STRING_KEY}`;
  dispatch(loadingWindows(true));
  try {
    const res = await axios.get(`${urlCharacter}`);
    dispatch({
      type: OBTENER_COMICS_POR_ID_EXITO,
      payload: {
        array: res.data.data.results
      },
    });
 
  } catch (error) {
    console.log(error);
  }
  dispatch(loadingWindows(false));
};

export const getComicsByNameAccion = (comics) => async (dispatch, getState) => {
  const limit = 8;
  const orderBy = "title";
  const urlCharacterComics = `${urlBaseComicsName}?titleStartsWith=${comics}&limit=${limit}&orderBy=${orderBy}&${URL_STRING_KEY}`;
  dispatch(loadingWindows(true));
  try {
    const res = await axios.get(`${urlCharacterComics}`);
    dispatch({
      type: OBTENER_COMICS_POR_NOMBRE_EXITO,
      payload: {
        arrayComics: res.data.data.results,
        length: res.data.data.total,
        name: comics
      },
    });
    console.log("arreglo busqueda por comics: ", getState().comics.arrayComics)
  } catch (error) {
    console.log(error);
    
  }
  dispatch(loadingWindows(false));
};
