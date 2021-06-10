import axios from "axios";
import {urlStringKey} from "../APIS/MarvelKey"
import {loadingWindows, showButtons, 
    showCardsCharacters } from "../APIS/ToolsActions"


const urlBaseCharacters = "https://gateway.marvel.com:443/v1/public/characters"
const addOffset = 8;



//acciones
export const getCharactersAccion = () => async (dispatch) => {
    const offset =  Math.trunc(Math.floor(Math.random() * 1000) + 1);
    const urlCharacter = `${urlBaseCharacters}?limit=8&offset=${offset}&orderBy=modified&${urlStringKey}`

    dispatch(loadingWindows(true));
    try {
        
        const res = await axios.get(`${urlCharacter}`)
        dispatch({
            type: "OBTENER_CHARACTERS_EXITO",
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
    const urlCharacter = `${urlBaseCharacters}?nameStartsWith=${personaje}&limit=8&orderBy=name&${urlStringKey}`
    dispatch(loadingWindows(true));
    
    try {
        
        const res = await axios.get(`${urlCharacter}`)
        dispatch({
            type: "OBTENER_CHARACTER_POR_NOMBRE_EXITO",
            payload: {
                array: res.data.data.results,
                length: res.data.data.total,
                name: personaje               
            }
        })
        dispatch(showButtons(true));
        dispatch(showCardsCharacters());
        
    } catch (error) {
        console.log(error);
              
    }
    dispatch(loadingWindows(false));
}

export const siguienteCharacterAccion = () => async (dispatch, getState) => {
    const offset = getState().personajes.offset
    const name = getState().personajes.name
    const siguiente = offset + addOffset
    const urlCharacter = `${urlBaseCharacters}?nameStartsWith=${name}&limit=8&offset=${siguiente}&orderBy=name&${urlStringKey}`
    const length = getState().personajes.length
    
    if(siguiente >= length) {console.log("exedido el nro de items a mostrar")
    }else {
        dispatch(loadingWindows(true));
        try {
            
            const res = await axios.get(`${urlCharacter}`)
            dispatch({
                type: "SIGUIENTE_CHARACTERS_EXITO",
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
    const offset = getState().personajes.offset
    const name = getState().personajes.name
    const siguiente = offset - addOffset
    const urlCharacter = `${urlBaseCharacters}?nameStartsWith=${name}&limit=8&offset=${siguiente}&orderBy=name&${urlStringKey}`

    if(siguiente < 0) {console.log("exedido el nro de items a mostrar")
    }else {
        dispatch(loadingWindows(true));
        try {
            
            const res = await axios.get(`${urlCharacter}`)
            dispatch({
                type: "ANTERIOR_CHARACTER_EXITO",
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



