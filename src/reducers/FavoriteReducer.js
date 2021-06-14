// constantes
const dataInicial = {
  arrayFavCharacter: [],
  favoriteStarNav: localStorage.getItem("favPersonajes") ? true : false, // Oculta o muestra la estrella favoritos en el nav
  arrayFavComics: [],
};

export default function favoriteReducer(state = dataInicial, action) {
  switch (action.type) {
    case "ACTIVAR_ESTRELLA_FAV_NAV":
      return { ...state, favoriteStarNav: action.payload.favoriteStarNav };
    case "OBTENER_FAVORITOS_CHARACTER_EXITO":
      return { ...state, arrayFavCharacter: action.payload.arrayFavCharacter };
    case "OBTENER_FAVORITOS_COMICS_EXITO":
      return { ...state, arrayFavComics: action.payload.arrayFavComics };
    default:
      return state;
  }
}

export const setFavoriteStar = (data) => async (dispatch) => {
  dispatch({
    type: "ACTIVAR_ESTRELLA_FAV_NAV",
    payload: {
      favoriteStarNav: data,
    },
  });
};

export const getFavoriteCharacters = () => async (dispatch) => {
  const characters = JSON.parse(localStorage.getItem("favPersonajes")) || [];
  dispatch({
    type: "OBTENER_FAVORITOS_CHARACTER_EXITO",
    payload: {
      arrayFavCharacter: characters,
    },
  });
};

export const getFavoriteComics = () => async (dispatch) => {
  const comics = JSON.parse(localStorage.getItem("favComics")) || [];
  dispatch({
    type: "OBTENER_FAVORITOS_COMICS_EXITO",
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
        type: "OBTENER_FAVORITOS_CHARACTER_EXITO",
        payload: {
          arrayFavCharacter: objetoFav,
        },
      });
    } else {
      let indice = objetoFav.findIndex((data) => data.id === idIn);
      objetoFav.splice(indice, 1);
      dispatch({
        type: "OBTENER_FAVORITOS_CHARACTER_EXITO",
        payload: {
          arrayFavCharacter: objetoFav,
        },
      });
    }
    localStorage.setItem("favPersonajes", JSON.stringify(objetoFav));
    //TODO Revisar aqui, no se elimina
    console.log("objetoFav: ", objetoFav);
    if (objetoFav === []) localStorage.removeItem("favPersonajes");
    dispatch(setFavoriteStar(true));
    // if(!objetoFav===[])localStorage.setItem("favPersonajes", JSON.stringify(objetoFav));
    // else localStorage.removeItem("favPersonajes");
    // console.log("ArrayFav final:", getState().favorite.arrayFavCharacter);
    //dispatch(showNavFavoriteStar());
  };

export const addComicToFavorite = (comicValues) => async (dispatch) => {
  const arrayFavComics = JSON.parse(localStorage.getItem("favComics")) || [];

  if (arrayFavComics.find((data) => data.id === comicValues.id)) {
    let idx = arrayFavComics.findIndex(data => data.id === comicValues.id)
    arrayFavComics.splice(idx, 1)
  }else{
    arrayFavComics.push(comicValues);
  }

  // const res = objetoFavComics.find((data) => data.id === idIn);
  // if (!res) {
  //   objetoFavComics.push(miObjetoFavComics);
  //   dispatch({
  //     type: "OBTENER_FAVORITOS_COMICS_EXITO",
  //     payload: {
  //       arrayFavComics: objetoFavComics,
  //     },
  //   });
  // } else {
  //   let indice = objetoFavComics.findIndex((data) => data.id === idIn);
  //   objetoFavComics.splice(indice, 1);
  //   dispatch({
  //     type: "OBTENER_FAVORITOS_COMICS_EXITO",
  //     payload: {
  //       arrayFavComics: objetoFavComics,
  //     },
  //   });
  // }
 await localStorage.setItem("favComics", JSON.stringify(arrayFavComics));
  dispatch(getFavoriteComics())
  // dispatch(setFavoriteStar(true));
};

//TODO revisar aqui para mostrar la estrella favoritos en Nav y cargar losfavoritos
export const showNavFavoriteStar = () => async (dispatch) => {
  const objetoFavCharacter = JSON.parse(localStorage.getItem("favPersonajes"));
  const objetoFavComics = JSON.parse(localStorage.getItem("favComics"));

  if (objetoFavCharacter) {
    localStorage.setItem("favPersonajes", JSON.stringify(objetoFavCharacter));
    localStorage.setItem("favComics", JSON.stringify(objetoFavComics));
    return dispatch(setFavoriteStar(true));
  } else {
    return dispatch(setFavoriteStar(false));
  }
};
