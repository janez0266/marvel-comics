// constantes
const dataInicial = {
    array: [],    
    arrayComics: [],  
    arrayComicFull: [],
    offset: 0,  
    title: "",
    length: 0
}
export default function comicsReducer(state = dataInicial, action){
    switch(action.type){
        case "OBTENER_COMICS_POR_ID_EXITO":
            return {...state, array: action.payload.array
            }
        case "OBTENER_COMICS_POR_NOMBRE_EXITO":
            return {...state, arrayComics: action.payload.arrayComics,                 
                title: action.payload.title,
                length: action.payload.length
            }     
          case  "SIGUIENTE_COMICS_EXITO":
            return {...state, arrayComics: action.payload.arrayComics, 
              offset: action.payload.offset}
          case  "ANTERIOR_COMICS_EXITO": 
            return {...state, arrayComics: action.payload.arrayComics, 
            offset: action.payload.offset }
          case "COMICS_FULL_EXITO":
            return {...state, arrayComicFull: action.payload.arrayComicFull}
       
        default:
            return state

    }

}