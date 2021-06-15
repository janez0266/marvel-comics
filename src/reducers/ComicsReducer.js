// constantes
const dataInicial = {
    array: [],    
    arrayComics: [],  
    arrayComicFull: {},
    offset: 0,  
    title: "",
    length: 0
}
export default function comicsReducer(state = dataInicial, action){
    switch(action.type){
        case "GET_COMICS_BY_ID":
            return {...state, array: action.payload.array
            }
        case "GET_COMICS_BY_NAME":
            return {...state, arrayComics: action.payload.arrayComics,                 
                title: action.payload.title,
                length: action.payload.length,
                offset: action.payload.offset
            }     
        case  "NEXT_COMICS":
            return {...state, arrayComics: action.payload.arrayComics, 
            offset: action.payload.offset}
        case  "BACK_COMICS": 
            return {...state, arrayComics: action.payload.arrayComics, 
                offset: action.payload.offset }
        case "GET_COMICS_FULL_BY_ID":
            return {...state, arrayComicFull: action.payload.arrayComicFull}
        case "CLEAR_LIST_COMICS_MODAL":
            return  {...state, array: action.payload.array}       
       
        default:
            return state

    }

}