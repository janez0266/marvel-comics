import axios from "axios";
import {urlStringKey} from "../APIS/MarvelKey"
import {desactivarModal, loadingWindows,  showPopupWindow } from "../actions/ToolsActions";

// constantes
const addOffset = 8;
const urlBaseComicsName = "https://gateway.marvel.com:443/v1/public/comics";
const urlBaseComics = "https://gateway.marvel.com:443/v1/public/characters/";
const urlBaseComicsFull = "https://gateway.marvel.com:443/v1/public/comics/";


//acciones
export const getComicsByIdAccion = (id) => async (dispatch, getState) => {

  const urlCharacter = `${urlBaseComics}${id}/comics?orderBy=onsaleDate&${urlStringKey}`;
  dispatch(loadingWindows(true));
  try {
    const res = await axios.get(`${urlCharacter}`);
    dispatch({
      type: "GET_COMICS_BY_ID",
      payload: {
        array: res.data.data.results
      },
    });
 
  } catch (error) {
    console.log(error);
    dispatch(showPopupWindow("..Error al descargar los datos del personaje. Intente de nuevo..."));
  }
  dispatch(loadingWindows(false));
  const isEmpty = getState().comics.array.length;
  if(isEmpty === 0) {
    dispatch(showPopupWindow("..No hay mas datos que mostrar..."));
    dispatch(desactivarModal());
  }
};

export const getComicsByNameAccion = (title) => async (dispatch) => {
  const urlCharacterComics = `${urlBaseComicsName}?titleStartsWith=${title}&limit=8&orderBy=title&${urlStringKey}`;
  dispatch(loadingWindows(true));
  try {
    const res = await axios.get(`${urlCharacterComics}`);
    dispatch({
      type: "GET_COMICS_BY_NAME",
      payload: {
        arrayComics: res.data.data.results,
        length: res.data.data.total,
        title: title,
        offset: 0
      },
    });
    
  } catch (error) {
    console.log(error);
    dispatch(showPopupWindow("..Error al descargar los datos del personaje. Intente de nuevo..."));
  }
  dispatch(loadingWindows(false));
};

export const siguienteComicsAccion = () => async (dispatch, getState) => {
  const offset = getState().comics.offset
  const title = getState().comics.title
  const siguiente = offset + addOffset
  const urlCharacter = `${urlBaseComicsName}?titleStartsWith=${title}&limit=8&offset=${siguiente}&orderBy=title&${urlStringKey}`
  const length = getState().comics.length
  if(siguiente >= length) {dispatch(showPopupWindow("..No hay mas datos que mostrar..."))
  }else {
      dispatch(loadingWindows(true));
      try {          
          const res = await axios.get(`${urlCharacter}`)
          dispatch({
              type: "NEXT_COMICS",
              payload: {
                  arrayComics: res.data.data.results,
                  offset: siguiente
              }
          })

      } catch (error) {
          console.log(error)
          dispatch(showPopupWindow("..Error al descargar los datos del personaje. Intente de nuevo..."));
      }
      dispatch(loadingWindows(false));
  }
}

export const anteriorComicsAccion = () => async (dispatch, getState) => {
  const offset = getState().comics.offset
  const title = getState().comics.title
  const siguiente = offset - addOffset
  const urlCharacter = `${urlBaseComicsName}?titleStartsWith=${title}&limit=8&offset=${siguiente}&orderBy=title&${urlStringKey}`

  if(siguiente < 0) {dispatch(showPopupWindow("..No hay mas datos que mostrar..."))
  }else {
      dispatch(loadingWindows(true));
      try {          
          const res = await axios.get(`${urlCharacter}`)
          dispatch({
              type: "BACK_COMICS",
              payload: {
                  arrayComics: res.data.data.results,
                  offset: siguiente                    
              }
          })
      } catch (error) {
          console.log(error)
          dispatch(showPopupWindow("..Error al descargar los datos del personaje. Intente de nuevo..."));
      }
      dispatch(loadingWindows(false));
  }
}


export const getComicFullById = (comicId) => async(dispatch)=>{

  const urlCharacter = `${urlBaseComicsFull}${comicId}?${urlStringKey}`;
  dispatch(loadingWindows(true));
  try {
    const res = await axios.get(`${urlCharacter}`);
    dispatch({
      type: "GET_COMICS_FULL_BY_ID",
      payload: {
        arrayComicFull: res.data.data.results[0]
      },
    });
  } catch (error) {
    console.log(error);
    dispatch(showPopupWindow("..Error al descargar los datos del personaje. Intente de nuevo..."));
  }
  dispatch(loadingWindows(false));
}

export const clearComicsModal = () => async (dispatch) => {
    dispatch({
      type: "CLEAR_LIST_COMICS_MODAL",
      payload: {
        array: []
      },
    });
};