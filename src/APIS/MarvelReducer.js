const dataInicial = {
    array: [],
    offset: 0,
    length: 0,
    name: ""
}


export default function marvelReducer(state = dataInicial, action){
    switch(action.type){
        case "OBTENER_CHARACTERS_EXITO":
            return {...state, array: action.payload.array }
        case "OBTENER_CHARACTER_POR_NOMBRE_EXITO":
            return {...state, array: action.payload.array, 
                length: action.payload.length,
                name: action.payload.name
             }
        case "SIGUIENTE_CHARACTERS_EXITO":
            return {...state, array: action.payload.array, 
                offset: action.payload.offset}
        case "ANTERIOR_CHARACTER_EXITO":
            return {...state, array: action.payload.array, 
                offset: action.payload.offset }
        case "OBTENER_CHARACTERS_FAVORITOS_EXITO":
            return {...state, array: action.payload.array }

        default:
            return state

    }
}