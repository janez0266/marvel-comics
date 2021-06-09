import axios from "axios";
import MarvelKey from "./MarvelKey"
import {loadingWindows} from "../APIS/ToolsReducer"
import {showButtons} from "../APIS/ToolsReducer"

const urlGetKey = new MarvelKey();
const URL_STRING_KEY =urlGetKey.urlString();
const urlBaseCharacters = "https://gateway.marvel.com:443/v1/public/characters"

import {OBTENER_CHARACTERS_EXITO} from "../utils/Constants"
import {SIGUIENTE_CHARACTERS_EXITO} from "../utils/Constants"
import {OBTENER_CHARACTER_POR_NOMBRE_EXITO} from "../utils/Constants"
import {ANTERIOR_CHARACTER_EXITO} from "../utils/Constants"


//acciones
export const getCharactersAccion = () => async (dispatch) => {
    const limit = 8; 
    const orderBy = "modified";
    const offset =  Math.trunc(Math.floor(Math.random() * 1000) + 1);
    const urlCharacter = `${urlBaseCharacters}?limit=${limit}&offset=${offset}&orderBy=${orderBy}&${URL_STRING_KEY}`

    dispatch(loadingWindows(true));
    try {
        
        const res = await axios.get(`${urlCharacter}`)
        dispatch({
            type: OBTENER_CHARACTERS_EXITO,
            payload: {
                array: res.data.data.results
            }
        })
        console.log("Url general de personajes: ",urlCharacter);
    } catch (error) {
        console.log(error);
    }
    dispatch(loadingWindows(false));
}

export const getCharactersByNameAccion = (personaje) => async (dispatch) => {
    const limit = 8;
    const orderBy = "name";    
    const urlCharacter = `${urlBaseCharacters}?nameStartsWith=${personaje}&limit=${limit}&orderBy=${orderBy}&${URL_STRING_KEY}`
    dispatch(loadingWindows(true));
    
    try {
        
        const res = await axios.get(`${urlCharacter}`)
        dispatch({
            type: OBTENER_CHARACTER_POR_NOMBRE_EXITO,
            payload: {
                array: res.data.data.results,
                length: res.data.data.total,
                name: personaje               
            }
        })
        dispatch(showButtons(true));
        
    } catch (error) {
        console.log(error);
              
    }
    dispatch(loadingWindows(false));
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
        dispatch(loadingWindows(true));
        try {
            
            const res = await axios.get(`${urlCharacter}`)
            dispatch({
                type: SIGUIENTE_CHARACTERS_EXITO,
                payload: {
                    array: res.data.data.results,
                    offset: siguiente
                }
            })

        } catch (error) {
            console.log(error)
               
        }
        dispatch(loadingWindows(false));
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
        dispatch(loadingWindows(true));
        try {
            
            const res = await axios.get(`${urlCharacter}`)
            dispatch({
                type: ANTERIOR_CHARACTER_EXITO,
                payload: {
                    array: res.data.data.results,
                    offset: siguiente                    
                }
            })
        } catch (error) {
            console.log(error)
           
        }
        dispatch(loadingWindows(false));
    }

}



