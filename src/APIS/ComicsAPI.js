import axios from "axios";
import MarvelKey from "./MarvelKey";

// constantes
const dataInicial = {
    array: [],    
    name: "",
    waitStateComics: false
}


const urlGetKey = new MarvelKey();
const URL_STRING_KEY = urlGetKey.urlString();
const urlBaseComics ="https://gateway.marvel.com:443/v1/public/characters/"

const OBTENER_COMICS_POR_ID_EXITO = "OBTENER_COMICS_POR_ID_EXITO";
const OBTENER_COMICS_POR_NOMBRE_EXITO = "OBTENER_COMICS_POR_NOMBRE_EXITO";
const SET_WAIT = "SET_WAIT";
//const SHOW_BUTTONS = "SHOW_BUTTONS";


//const SHOW_BUTTONS = "SHOW_BUTTONS";

export default function comicsReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_COMICS_POR_ID_EXITO:
            return {...state, array: action.payload.array, 
                waitStateComics: action.payload.waitStateComics
            }
        case OBTENER_COMICS_POR_NOMBRE_EXITO:
            return {...state, array: action.payload.array,                 
                name: action.payload.name, 
                waitStateComics: action.payload.waitStateComics
            }
       
        case SET_WAIT:
            return {...state, waitStateComics: action.payload.waitStateComics}
        default:
            return state

    }

}

//acciones
export const getComicsByIdAccion = (id) => async (dispatch, getState) => {
  
  const urlCharacter = `${urlBaseComics}${id}/comics?orderBy=onsaleDate&${URL_STRING_KEY}`;
  try {
    dispatch({
      type: SET_WAIT,
      payload: {
          waitStateComics: true
      },
    });
    console.log("limpiando store comics");
    const res = await axios.get(`${urlCharacter}`);
    dispatch({
      type: OBTENER_COMICS_POR_ID_EXITO,
      payload: {
        array: res.data.data.results,
        waitStateComics: false
      },
    });
    console.log("Personaje: ", id," -URL: " ,urlCharacter);
    console.log(res.data.data.results);
    console.log("WaitStateComics is: ", getState().waitStateComics)
  } catch (error) {
    console.log(error);
    dispatch({
      type: SET_WAIT,
      payload: {
        waitStateComics: false,
      },
    });
  }
};

// export const getComicsByNameAccion = (personaje) => async (dispatch) => {
//   const limit = 8;
//   const orderBy = "name";
//   const urlCharacter = `${urlBaseCharacters}?nameStartsWith=${personaje}&limit=${limit}&orderBy=${orderBy}&${URL_STRING_KEY}`;
//   try {
//     dispatch({
//       type: SET_WAIT,
//       payload: {
//         waitState: true,
//       },
//     });
//     const res = await axios.get(`${urlCharacter}`);
//     dispatch({
//       type: OBTENER_COMICS_POR_NOMBRE_EXITO,
//       payload: {
//         array: res.data.data.results,
//         length: res.data.data.total,
//         name: personaje,
//         waitState: false,
//         showButtons: true,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//     dispatch({
//       type: SET_WAIT,
//       payload: {
//         waitState: false,
//       },
//     });
//   }
// };
