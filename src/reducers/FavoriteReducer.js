import star from "../images/star_favorite.png";
import yellowStar from "../images/favoritesilver.png"
import { useSelector } from "react-redux";

// constantes
const dataInicial = {
  arrayFavCharacter: [],
  favoriteStarNav: false, 
  arrayFavComics: [],
};



export default function favoriteReducer(state = dataInicial, action) {
  switch (action.type) {
    case "SET_FAVORITE_STAR_NAV":
      return { ...state, favoriteStarNav: action.payload.favoriteStarNav };
    case "GET_FAVORITES_CHARACTER":
      return { ...state, arrayFavCharacter: action.payload.arrayFavCharacter };
    case "GET_FAVORITTES_COMICS":
      return { ...state, arrayFavComics: action.payload.arrayFavComics };
    default:
      return state;
  }
}

//Inicializa el localStorage si no existe
export const initFavoritesLocalStorage = () => async () => {
  if(!localStorage.getItem("favPersonajes")) localStorage.setItem("favPersonajes",[ JSON.stringify([])]);
  if(!localStorage.getItem("favComics")) localStorage.setItem("favComics",[ JSON.stringify([])]);
};

//Setea en el store en true o false para posterior identificacion
export const setFavoriteStar = (data) => async (dispatch) => {
  dispatch({
    type: "SET_FAVORITE_STAR_NAV",
    payload: {
      favoriteStarNav: data,
    },
  });
};

//lee los personajes del localStorage y los pasa al store
export const getFavoriteCharacters = () => async (dispatch) => {
  const characters = JSON.parse(localStorage.getItem("favPersonajes")) || [];
  dispatch({
    type: "GET_FAVORITES_CHARACTER",
    payload: {
      arrayFavCharacter: characters,
    },
  });
};

//lee los comic del localStorage y los pasa al store
export const getFavoriteComics = () => async (dispatch) => {
  const comics = JSON.parse(localStorage.getItem("favComics")) || [];
  dispatch({
    type: "GET_FAVORITTES_COMICS",
    payload: {
      arrayFavComics: comics,
    },
  });
};

//Agrega los personajes seleccionados al arreglo de favoritos
export const addCharToFavorite =
  (nameIn, idIn, imgPath, imgExtension) => async (dispatch) => {
    const objetoFav = JSON.parse(localStorage.getItem("favPersonajes")) || [];
    const miObjetoFav = {
      id: idIn,
      name: nameIn,
      thumbnail: {
        path: imgPath,
        extension: imgExtension,
      },
    };

    const res = objetoFav.find((data) => data.id === idIn);
    if (!res) {
      objetoFav.push(miObjetoFav);
      dispatch({
        type: "GET_FAVORITES_CHARACTER",
        payload: {
          arrayFavCharacter: objetoFav,
        },
      });
    } else {
      let indice = objetoFav.findIndex((data) => data.id === idIn);
      objetoFav.splice(indice, 1);
      dispatch({
        type: "GET_FAVORITES_CHARACTER",
        payload: {
          arrayFavCharacter: objetoFav,
        },
      });
    }
    localStorage.setItem("favPersonajes", JSON.stringify(objetoFav));
    if (objetoFav === []) localStorage.removeItem("favPersonajes");
    dispatch(setNavFavoriteStar());
  };


//Agrega los comics seleccionados al arreglo de favoritos
export const addComicToFavorite = (comicValues) => async (dispatch) => {
  const arrayFavComics = JSON.parse(localStorage.getItem("favComics")) || [];

  if (arrayFavComics.find((data) => data.id === comicValues.id)) {
    let idx = arrayFavComics.findIndex(data => data.id === comicValues.id)
    arrayFavComics.splice(idx, 1)
  }else{
    arrayFavComics.push(comicValues);
  }
 await localStorage.setItem("favComics", JSON.stringify(arrayFavComics));
  dispatch(getFavoriteComics()) 
  dispatch(setNavFavoriteStar())
};


// Verifica la existencia de favoritos para setear el store en true o false 
export const setNavFavoriteStar = () => async (dispatch) => {
  const objetoFavCharacter = JSON.parse(localStorage.getItem("favPersonajes"));
  const objetoFavComics = JSON.parse(localStorage.getItem("favComics"));  
  if (objetoFavCharacter.length === 0 && objetoFavComics.length === 0) {    
    return dispatch(setFavoriteStar(false));
  } else {
    return dispatch(setFavoriteStar(true));
  }
  
};

// Verifica en el store los valores true o false para cambiar la estrella segun sea el caso
export const selectFavoriteStarNav = () =>{
	const showFavoriteStar = useSelector((store) => store.favorite.favoriteStarNav)
		if(showFavoriteStar){
			return yellowStar;
		}else {
			return star;
		}
	}