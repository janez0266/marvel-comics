import star from "../images/star_favorite.png";
import yellowStar from "../images/favoritesilver.png"
import { useSelector } from "react-redux";

// constantes
const dataInicial = {
  arrayFavCharacter: [],
  favoriteStarNav: localStorage.getItem("favPersonajes") ? true : false, //TODO VERIFICAR TAMBIEN COMICS

  //localStorage.getItem("favPersonajes") ? true : false   
  //devuelve false solo si no existe , 
  //true si hay un elemento asi este vacio

  //localStorage.getItem("favPersonajes")===[] ? true : false,
  //devuelve false si existe un elemento vacio o con datos, o si no hay elementos

  //localStorage.getItem("favPersonajes")===0 ? true : false,
  // devuelve falso si existe un elemento lleno o vacio, o no existe




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

export const initFavoritesLocalStorage = () => async (dispatch) => {
  if(!localStorage.getItem("favPersonajes")) localStorage.setItem("favPersonajes",[ JSON.stringify([])]);
  if(!localStorage.getItem("favComics")) localStorage.setItem("favComics",[ JSON.stringify([])]);
};


export const setFavoriteStar = (data) => async (dispatch) => {
  dispatch({
    type: "SET_FAVORITE_STAR_NAV",
    payload: {
      favoriteStarNav: data,
    },
  });
};

export const getFavoriteCharacters = () => async (dispatch) => {
  const characters = JSON.parse(localStorage.getItem("favPersonajes")) || [];
  dispatch({
    type: "GET_FAVORITES_CHARACTER",
    payload: {
      arrayFavCharacter: characters,
    },
  });
};

export const getFavoriteComics = () => async (dispatch) => {
  const comics = JSON.parse(localStorage.getItem("favComics")) || [];
  dispatch({
    type: "GET_FAVORITTES_COMICS",
    payload: {
      arrayFavComics: comics,
    },
  });
};

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
    console.log("estoy en addComicToFavorite")
  };



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
  console.log("estoy en addComicToFavorite")
  //dispatch(setFavoriteStar(true));
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