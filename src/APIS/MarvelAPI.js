import axios from "axios";
import MarvelKey from "./MarvelKey"
//import {marvelReducer} from "./MarvelReducer"
//import md5 from "react-native-md5";

// constantes

// const dataInicial = {
//     array: [],
//     offset: 0,
//     length: 0,
//     name: "",
//     waitState: false,
//     showButtons: false
// }
const urlGetKey = new MarvelKey();
const URL_STRING_KEY =urlGetKey.urlString();
const urlBaseCharacters = "https://gateway.marvel.com:443/v1/public/characters"


const OBTENER_CHARACTERS_EXITO = "OBTENER_CHARACTERS_EXITO";
const SIGUIENTE_CHARACTERS_EXITO = "SIGUIENTE_CHARACTERS_EXITO";
const OBTENER_CHARACTER_POR_NOMBRE_EXITO = "OBTENER_CHARACTER_POR_NOMBRE_EXITO";
const ANTERIOR_CHARACTER_EXITO = "ANTERIOR_CHARACTER_EXITO";
const SET_WAIT = "SET_WAIT";
//const SHOW_BUTTONS = "SHOW_BUTTONS";

//reducer
// export default function marvelReducer(state = dataInicial, action){
//     switch(action.type){
//         case OBTENER_CHARACTERS_EXITO:
//             return {...state, array: action.payload.array, 
//                 waitState: action.payload.waitState, 
//                 showButtons: action.payload.showButtons
//             }
//         case OBTENER_CHARACTER_POR_NOMBRE_EXITO:
//             return {...state, array: action.payload.array, 
//                 length: action.payload.length,
//                 name: action.payload.name, 
//                 waitState: action.payload.waitState,
//                 showButtons: action.payload.showButtons
//             }
//         case SIGUIENTE_CHARACTERS_EXITO:
//             return {...state, array: action.payload.array, 
//                 offset: action.payload.offset,
//                 waitState: action.payload.waitState}
//         case ANTERIOR_CHARACTER_EXITO:
//             return {...state, array: action.payload.array, 
//                 offset: action.payload.offset,
//                 waitState: action.payload.waitState
//             }
//         case SET_WAIT:
//             return {...state, waitState: action.payload.waitState}
//         default:
//             return state

//     }

// }

//acciones
export const getCharactersAccion = () => async (dispatch) => {
    const limit = 8; 
    const orderBy = "modified";
    const offset =  Math.trunc(Math.floor(Math.random() * 1000) + 1);
    const urlCharacter = `${urlBaseCharacters}?limit=${limit}&offset=${offset}&orderBy=${orderBy}&${URL_STRING_KEY}`
    try {
        dispatch({
            type: SET_WAIT,
            payload: {
                waitState: true
            }
        })
        const res = await axios.get(`${urlCharacter}`)
        dispatch({
            type: OBTENER_CHARACTERS_EXITO,
            payload: {
                array: res.data.data.results,
                waitState: false,
                showButtons: false
            }
        })
        console.log("Url general de personajes: ",urlCharacter);
    } catch (error) {
        console.log(error);
        dispatch({
            type: SET_WAIT,
            payload: {
                waitState: false
            }
        })
        
    }
}

export const getCharactersByNameAccion = (personaje) => async (dispatch) => {
    const limit = 8;
    const orderBy = "name";    
    const urlCharacter = `${urlBaseCharacters}?nameStartsWith=${personaje}&limit=${limit}&orderBy=${orderBy}&${URL_STRING_KEY}`
    try {
        dispatch({
            type: SET_WAIT,
            payload: {
                waitState: true
            }
        })
        const res = await axios.get(`${urlCharacter}`)
        dispatch({
            type: OBTENER_CHARACTER_POR_NOMBRE_EXITO,
            payload: {
                array: res.data.data.results,
                length: res.data.data.total,
                name: personaje,
                waitState: false,
                showButtons: true                
            }
        })
        console.log("Personaje: ", personaje," -URL: " ,urlCharacter);
    } catch (error) {
        console.log(error);
        dispatch({
            type: SET_WAIT,
            payload: {
                waitState: false
            }
        })        
    }
}

export const siguienteCharacterAccion = () => async (dispatch, getState) => {
    const limit = 8; 
    const addOffset = 8;
    const orderBy = "name";
    const offset = getState().personajes.offset
    const name = getState().personajes.name
    const siguiente = offset + addOffset
    const urlCharacter = `${urlBaseCharacters}?nameStartsWith=${name}&limit=${limit}&offset=${siguiente}&orderBy=${orderBy}&${URL_STRING_KEY}`
    const length = getState().personajes.length
    
    if(siguiente >= length) {console.log("exedido el nro de items a mostrar")
    }else {
        try {
            dispatch({
                type: SET_WAIT,
                payload: {
                    waitState: true
                }
            })
            const res = await axios.get(`${urlCharacter}`)
            dispatch({
                type: SIGUIENTE_CHARACTERS_EXITO,
                payload: {
                    array: res.data.data.results,
                    offset: siguiente,
                    waitState: false,
                }
            })

        } catch (error) {
            console.log(error)
            dispatch({
                type: SET_WAIT,
                payload: {
                    waitState: false
                }
            })   
        }
    }
}

export const anteriorCharacterAccion = () => async (dispatch, getState) => {
    const limit = 8; 
    const addOffset = 8;
    const orderBy = "name";
    const offset = getState().personajes.offset
    const name = getState().personajes.name
    const siguiente = offset - addOffset
    const urlCharacter = `${urlBaseCharacters}?nameStartsWith=${name}&limit=${limit}&offset=${siguiente}&orderBy=${orderBy}&${URL_STRING_KEY}`

    if(siguiente < 0) {console.log("exedido el nro de items a mostrar")
    }else {
        try {
            dispatch({
                type: SET_WAIT,
                payload: {
                    waitState: true
                }
            })
            const res = await axios.get(`${urlCharacter}`)
            dispatch({
                type: ANTERIOR_CHARACTER_EXITO,
                payload: {
                    array: res.data.data.results,
                    offset: siguiente,
                    waitState: false
                }
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: SET_WAIT,
                payload: {
                    waitState: false
                }
            })
        }
    }

}



