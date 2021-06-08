const dataInicial = {
    array: [],    
    name: "",
    waitStateComics: false
}

const OBTENER_COMICS_POR_ID_EXITO = "OBTENER_COMICS_POR_ID_EXITO";
const OBTENER_COMICS_POR_NOMBRE_EXITO = "OBTENER_COMICS_POR_NOMBRE_EXITO";
const SET_WAIT = "SET_WAIT";
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