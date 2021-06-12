// constantes
const dataInicial = {
    arrayFav:[],
    favoriteStarNav: false // Oculta o muestra la estrella favoritos en el nav
             
}


export default function favoriteReducer(state = dataInicial, action){
    switch(action.type){
        case "ACTIVAR_ESTRELLA_FAV_NAV":
            return {...state, favoriteStarNav: action.payload.favoriteStarNav} 
        case "OBTENER_FAVORITOS_EXITO":
            return {...state, arrayFav: action.payload.arrayFav}  
        default:
            return state
    }
}

export const setFavoriteStar = (data) => async (dispatch) => {
    dispatch({
      type: "ACTIVAR_ESTRELLA_FAV_NAV",
      payload: {
        favoriteStarNav: data
      },
    });    
};

export const addCharToFavorite = (nameIn, idIn, imgPath, imgExtension) => async (dispatch, getState) => {
    const objetoFav = JSON.parse(localStorage.getItem("favPersonajes")) || [];
    const miObjetoFav = {
      id: idIn,
      name: nameIn,
      thumbnail: {
        path: imgPath,
        extension: imgExtension,
      },
    };

    const res = objetoFav.find( data => data.id === idIn)
    if (!res) {
        objetoFav.push(miObjetoFav);
        dispatch({
            type: "OBTENER_FAVORITOS_EXITO",
            payload: {
            arrayFav: objetoFav
            },
        }); 
    }else {
        let indice = objetoFav.findIndex(data => data.id === idIn);
        objetoFav.splice(indice, 1);
        dispatch({
            type: "OBTENER_FAVORITOS_EXITO",
            payload: {
            arrayFav: objetoFav
            },
        });
     }
     localStorage.setItem("favPersonajes", JSON.stringify(objetoFav));
    console.log("ArrayFav final:", getState().favorite.arrayFav);
    dispatch(setFavoriteStar(true)); 
  }