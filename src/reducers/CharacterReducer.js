const dataInicial = {
    array: [],
    offset: 0,
    length: 0,
    name: "",
    selected: "" 
}


export default function marvelReducer(state = dataInicial, action){
    switch(action.type){
        case "GET_CHARACTERS":
            return {...state, array: action.payload.array }
        case "GET_CHARACTER_BY_NAME":
            return {...state, array: action.payload.array, 
                length: action.payload.length,
                name: action.payload.name,
                offset: action.payload.offset
             }
        case "NEXT_CHARACTERS":
            return {...state, array: action.payload.array, 
                offset: action.payload.offset}
        case "BACK_CHARACTER":
            return {...state, array: action.payload.array, 
                offset: action.payload.offset }
        case "GET_FAVORITES_CHARACTERS":
            return {...state, array: action.payload.array }
        case "SELECT_CHARACTER":
            return {...state, selected: action.payload}
        default:
            return state

    }
}