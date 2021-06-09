import axios from "axios";
import MarvelKey from "./MarvelKey";
import {loadingWindows} from "../APIS/ToolsReducer";

// constantes
const dataInicial = {
    array: [],
    arrayComics: [],  
    offset: 0,  
    title: "",
    length: 0
}


const urlGetKey = new MarvelKey();
const URL_STRING_KEY = urlGetKey.urlString();

const urlBaseComicsName = "https://gateway.marvel.com:443/v1/public/comics";
const urlBaseComics = "https://gateway.marvel.com:443/v1/public/characters/";

const OBTENER_COMICS_POR_ID_EXITO = "OBTENER_COMICS_POR_ID_EXITO";
const OBTENER_COMICS_POR_NOMBRE_EXITO = "OBTENER_COMICS_POR_NOMBRE_EXITO";
const SIGUIENTE_COMICS_EXITO = "SIGUIENTE_COMICS_EXITO";
const ANTERIOR_COMICS_EXITO = "ANTERIOR_COMICS_EXITO";



export default function comicsReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_COMICS_POR_ID_EXITO:
            return {...state, array: action.payload.array
            }
        case OBTENER_COMICS_POR_NOMBRE_EXITO:
            return {...state, arrayComics: action.payload.arrayComics,                 
                title: action.payload.title,
                length: action.payload.length
            }     
          case  SIGUIENTE_COMICS_EXITO:
            return {...state, arrayComics: action.payload.arrayComics, 
              offset: action.payload.offset}
          case  ANTERIOR_COMICS_EXITO: 
          return {...state, arrayComics: action.payload.arrayComics, 
            offset: action.payload.offset }
       
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

export const getComicsByNameAccion = (title) => async (dispatch, getState) => {
  const limit = 8;
  const orderBy = "title";
  const urlCharacterComics = `${urlBaseComicsName}?titleStartsWith=${title}&limit=${limit}&orderBy=${orderBy}&${URL_STRING_KEY}`;
  dispatch(loadingWindows(true));
  try {
    const res = await axios.get(`${urlCharacterComics}`);
    dispatch({
      type: OBTENER_COMICS_POR_NOMBRE_EXITO,
      payload: {
        arrayComics: res.data.data.results,
        length: res.data.data.total,
        title: title
      },
    });
    console.log("arreglo busqueda por comics: ", getState().comics.arrayComics)
  } catch (error) {
    console.log(error);
    
  }
  dispatch(loadingWindows(false));
};

export const siguienteComicsAccion = () => async (dispatch, getState) => {
  const limit = 8; 
  const addOffset = 8;
  const orderBy = "title";
  const offset = getState().comics.offset
  const title = getState().comics.title
  const siguiente = offset + addOffset
  const urlCharacter = `${urlBaseComicsName}?titleStartsWith=${title}&limit=${limit}&offset=${siguiente}&orderBy=${orderBy}&${URL_STRING_KEY}`
  const length = getState().comics.length
  
  if(siguiente >= length) {console.log("exedido el nro de items a mostrar")
  }else {
      dispatch(loadingWindows(true));
      try {
          
          const res = await axios.get(`${urlCharacter}`)
          dispatch({
              type: SIGUIENTE_COMICS_EXITO,
              payload: {
                  arrayComics: res.data.data.results,
                  offset: siguiente
              }
          })

      } catch (error) {
          console.log(error)
             
      }
      dispatch(loadingWindows(false));
  }
}

export const anteriorComicsAccion = () => async (dispatch, getState) => {
  const limit = 8; 
  const addOffset = 8;
  const orderBy = "title";
  const offset = getState().comics.offset
  const title = getState().comics.title
  const siguiente = offset - addOffset
  const urlCharacter = `${urlBaseComicsName}?titleStartsWith=${title}&limit=${limit}&offset=${siguiente}&orderBy=${orderBy}&${URL_STRING_KEY}`

  if(siguiente < 0) {console.log("exedido el nro de items a mostrar")
  }else {
      dispatch(loadingWindows(true));
      try {
          
          const res = await axios.get(`${urlCharacter}`)
          dispatch({
              type: ANTERIOR_COMICS_EXITO,
              payload: {
                  arrayComics: res.data.data.results,
                  offset: siguiente                    
              }
          })
      } catch (error) {
          console.log(error)
         
      }
      dispatch(loadingWindows(false));
  }

}