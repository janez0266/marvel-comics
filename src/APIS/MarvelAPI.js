import axios from "axios";
import {urlStringKey} from "../APIS/MarvelKey"
import {loadingWindows, showButtons, 
    showCardsCharacters, showPopupWindow } from "../APIS/ToolsActions"



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
    } catch (error) {
        console.log(error);
        dispatch(showPopupWindow("..Error al descargar los datos. Intente de nuevo..."));
    }
    dispatch(loadingWindows(false));
}

export const getCharactersByNameAccion = (personaje) => async (dispatch, getState) => {
    const urlCharacter = `${urlBaseCharacters}?nameStartsWith=${personaje}&limit=8&orderBy=name&${urlStringKey}`
    dispatch(loadingWindows(true));
    try {
        const res = await axios.get(`${urlCharacter}`)
        dispatch({
            type: "OBTENER_CHARACTER_POR_NOMBRE_EXITO",
            payload: {
                array: res.data.data.results,
                length: res.data.data.total,
                name: personaje,
                offset: 0
            }
        })
        
        dispatch(showCardsCharacters());
        const exist = getState().personajes.length
        if(exist === 0)
        dispatch(showPopupWindow("...No hay personajes que mostrar. Intente de nuevo..."));
        else dispatch(showButtons(true));
    } catch (error) {
        console.log(error);
        dispatch(showPopupWindow("..Error al descargar los datos del personaje. Intente de nuevo..."));
    }
    dispatch(loadingWindows(false));
}

export const siguienteCharacterAccion = () => async (dispatch, getState) => {
    const offset = getState().personajes.offset
    const name = getState().personajes.name
    const siguiente = offset + addOffset
    const urlCharacter = `${urlBaseCharacters}?nameStartsWith=${name}&limit=8&offset=${siguiente}&orderBy=name&${urlStringKey}`
    const length = getState().personajes.length
    
    if(siguiente >= length) {dispatch(showPopupWindow("..No hay mas datos que mostrar..."))
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
            dispatch(showPopupWindow("..Error al descargar los datos del personaje. Intente de nuevo..."));
        }
        dispatch(loadingWindows(false));
    }
}

export const anteriorCharacterAccion = () => async (dispatch, getState) => {
    const offset = getState().personajes.offset;
    const name = getState().personajes.name;
    const siguiente = offset - addOffset;
    const urlCharacter = `${urlBaseCharacters}?nameStartsWith=${name}&limit=8&offset=${siguiente}&orderBy=name&${urlStringKey}`;

    if(siguiente < 0) { dispatch(showPopupWindow("..No hay mas datos que mostrar..."));
    } else {
        dispatch(loadingWindows(true));
        try {
            const res = await axios.get(`${urlCharacter}`);
            dispatch({
                type: "ANTERIOR_CHARACTER_EXITO",
                payload: {
                    array: res.data.data.results,
                    offset: siguiente                    
                }
            });
        } catch (error) {
            console.log(error);
            dispatch(showPopupWindow("..Error al descargar los datos del personaje. Intente de nuevo..."));
        }
        dispatch(loadingWindows(false));
    }
}


export const getFavoritosAccion = () => async (dispatch) => {
    const arrayFavoritos = JSON.parse(localStorage.getItem("favPersonajes")) || [];
    //const arrayFavoritos = getState().favorite.arrayFav;
    console.log(arrayFavoritos);
    dispatch({
            type: "OBTENER_CHARACTERS_FAVORITOS_EXITO",
            payload: {
                array: arrayFavoritos
            }
        })
    dispatch(showButtons(true));
}