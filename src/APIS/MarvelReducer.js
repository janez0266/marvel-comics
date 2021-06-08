
const dataInicial = {
    array: [],
    offset: 0,
    length: 0,
    name: "",
    waitState: false,
    showButtons: false
}

const OBTENER_CHARACTERS_EXITO = "OBTENER_CHARACTERS_EXITO";
const SIGUIENTE_CHARACTERS_EXITO = "SIGUIENTE_CHARACTERS_EXITO";
const OBTENER_CHARACTER_POR_NOMBRE_EXITO = "OBTENER_CHARACTER_POR_NOMBRE_EXITO";
const ANTERIOR_CHARACTER_EXITO = "ANTERIOR_CHARACTER_EXITO";
const SET_WAIT = "SET_WAIT";
//const SHOW_BUTTONS = "SHOW_BUTTONS";

export default function marvelReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_CHARACTERS_EXITO:
            return {...state, array: action.payload.array, 
                waitState: action.payload.waitState, 
                showButtons: action.payload.showButtons
            }
        case OBTENER_CHARACTER_POR_NOMBRE_EXITO:
            return {...state, array: action.payload.array, 
                length: action.payload.length,
                name: action.payload.name, 
                waitState: action.payload.waitState,
                showButtons: action.payload.showButtons
            }
        case SIGUIENTE_CHARACTERS_EXITO:
            return {...state, array: action.payload.array, 
                offset: action.payload.offset,
                waitState: action.payload.waitState}
        case ANTERIOR_CHARACTER_EXITO:
            return {...state, array: action.payload.array, 
                offset: action.payload.offset,
                waitState: action.payload.waitState
            }
        case SET_WAIT:
            return {...state, waitState: action.payload.waitState}
        default:
            return state

    }

}