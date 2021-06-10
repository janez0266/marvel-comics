import axios from "axios";
import {urlStringKey} from "../APIS/MarvelKey"
import {loadingWindows} from "../APIS/ToolsReducer";

// constantes
const dataInicial = {
    array: [],    
    arrayComics: [],  
    arrayComicFull: [],
    offset: 0,  
    title: "",
    length: 0
}

const addOffset = 8;
const urlBaseComicsName = "https://gateway.marvel.com:443/v1/public/comics";
const urlBaseComics = "https://gateway.marvel.com:443/v1/public/characters/";



export default function comicsReducer(state = dataInicial, action){
    switch(action.type){
        case "OBTENER_COMICS_POR_ID_EXITO":
            return {...state, array: action.payload.array
            }
        case "OBTENER_COMICS_POR_NOMBRE_EXITO":
            return {...state, arrayComics: action.payload.arrayComics,                 
                title: action.payload.title,
                length: action.payload.length
            }     
          case  "SIGUIENTE_COMICS_EXITO":
            return {...state, arrayComics: action.payload.arrayComics, 
              offset: action.payload.offset}
          case  "ANTERIOR_COMICS_EXITO": 
            return {...state, arrayComics: action.payload.arrayComics, 
            offset: action.payload.offset }
          case "COMICS_FULL_EXITO":
            return {...state, arrayComicFull: action.payload.arrayComicFull}
       
        default:
            return state

    }

}

//acciones
export const getComicsByIdAccion = (id) => async (dispatch) => {

  const urlCharacter = `${urlBaseComics}${id}/comics?orderBy=onsaleDate&${urlStringKey}`;
  dispatch(loadingWindows(true));
  try {
    const res = await axios.get(`${urlCharacter}`);
    dispatch({
      type: "OBTENER_COMICS_POR_ID_EXITO",
      payload: {
        array: res.data.data.results
      },
    });
 
  } catch (error) {
    console.log(error);
  }
  dispatch(loadingWindows(false));
};

export const getComicsByNameAccion = (title) => async (dispatch) => {
  const urlCharacterComics = `${urlBaseComicsName}?titleStartsWith=${title}&limit=8&orderBy=title&${urlStringKey}`;
  dispatch(loadingWindows(true));
  try {
    const res = await axios.get(`${urlCharacterComics}`);
    dispatch({
      type: "OBTENER_COMICS_POR_NOMBRE_EXITO",
      payload: {
        arrayComics: res.data.data.results,
        length: res.data.data.total,
        title: title
      },
    });
    //console.log("arreglo busqueda por comics: ", getState().comics.arrayComics)
  } catch (error) {
    console.log(error);
    
  }
  dispatch(loadingWindows(false));
};

export const siguienteComicsAccion = () => async (dispatch, getState) => {
  const offset = getState().comics.offset
  const title = getState().comics.title
  const siguiente = offset + addOffset
  const urlCharacter = `${urlBaseComicsName}?titleStartsWith=${title}&limit=8&offset=${siguiente}&orderBy=title&${urlStringKey}`
  const length = getState().comics.length
  
  if(siguiente >= length) {console.log("exedido el nro de items a mostrar")
  }else {
      dispatch(loadingWindows(true));
      try {
          
          const res = await axios.get(`${urlCharacter}`)
          dispatch({
              type: "SIGUIENTE_COMICS_EXITO",
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
  const offset = getState().comics.offset
  const title = getState().comics.title
  const siguiente = offset - addOffset
  const urlCharacter = `${urlBaseComicsName}?titleStartsWith=${title}&limit=8&offset=${siguiente}&orderBy=title&${urlStringKey}`

  if(siguiente < 0) {console.log("exedido el nro de items a mostrar")
  }else {
      dispatch(loadingWindows(true));
      try {
          
          const res = await axios.get(`${urlCharacter}`)
          dispatch({
              type: "ANTERIOR_COMICS_EXITO",
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
export const getComicFull = (id, title, description, image, published, writer, penciler, coverArtist, urlComic) => async (dispatch) => {

  
  const arrayComicFull = {
      id: id,
      title: title,
      description: description,
      image:image,
      published: published,
      writer: writer,
      penciler: penciler,
      coverArtist: coverArtist,
      urlComic: urlComic
  }
  console.log("Mi Array dentro de ComicsApi", arrayComicFull)
  dispatch({
      type: "COMICS_FULL_EXITO",
      payload: {
          arrayComicFull: arrayComicFull                                    
      }
  })


}