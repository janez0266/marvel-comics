// constantes
const dataInicial = {
    loadingWindow: false,
    showButtons: false,           //muestra la barra de botones
    showButtonsScrollCards: true, // oculta o muestra los botones de dezplazamiento de las cards de personajes
    showButtonsScrollCardsComics: false, // oculta o muestra los botones de dezplazamiento de las cards de comics
    cardsCharacters: true,        //oculta o muestra las cards de personajes
    cardsComics: false,            // oculta o muestra las cards de comics
    comicFullShow: false          // Oculta o muestra el comics a pantalla completa
}


export default function toolsReducer(state = dataInicial, action){
    switch(action.type){
        case "ACTIVAR_VENTANA_LOADING_EXITO":
            return {...state, loadingWindow: action.payload.loadingWindow}              
        case "ACTIVAR_BOTONES_EXITO":
            return {...state, showButtons: action.payload.showButtons}
        case "ACTIVAR_BOTONES_SCROLL_CARDS_PERSONAJES":
            return {...state, showButtonsScrollCards: action.payload.showButtonsScrollCards}
        case "ACTIVAR_BOTONES_SCROLL_CARDS_COMICS":
            return {...state, showButtonsScrollCardsComics: action.payload.showButtonsScrollCardsComics}    
        case "ACTIVAR_CARDS_PERSONAJES_EXITO":
            return {...state, cardsCharacters: action.payload.cardsCharacters}
        case "ACTIVAR_CARDS_COMICS_EXITO":
            return {...state, cardsComics: action.payload.cardsComics}
        case "ACTIVAR_COMIC_FULL_EXITO":
            return  {...state, comicFullShow: action.payload.comicFullShow}
        default:
            return state
    }
}

export const loadingWindows = (data) => async (dispatch) => {
    dispatch({
      type: "ACTIVAR_VENTANA_LOADING_EXITO",
      payload: {
        loadingWindow: data
      },
    });    
};
export const showButtons = (data) => async (dispatch) => {
    dispatch({
      type: "ACTIVAR_BOTONES_EXITO",
      payload: {
        showButtons: data
      },
    });    
};
export const showsScrollButtonsCharacters = (data) => async (dispatch) => {
  dispatch({
    type: "ACTIVAR_BOTONES_SCROLL_CARDS_PERSONAJES",
    payload: {
      showButtonsScrollCards: data
    },
  });    
};
export const showsScrollButtonsComics = (data) => async (dispatch) => {
  dispatch({
    type: "ACTIVAR_BOTONES_SCROLL_CARDS_COMICS",
    payload: {
      showButtonsScrollCardsComics: data
    },
  });    
};
export const showCardsCharacters = () => async (dispatch) => {
  dispatch(showsScrollButtonsCharacters(true));
  dispatch(showsScrollButtonsComics(false));
  dispatch({
    type: "ACTIVAR_CARDS_PERSONAJES_EXITO",
    payload: {
      cardsCharacters: true
    },
  });    
  dispatch({
    type: "ACTIVAR_CARDS_COMICS_EXITO",
    payload: {
      cardsComics: false
    },
  });
  dispatch({
    type: "ACTIVAR_COMIC_FULL_EXITO",
    payload: {
      comicFullShow: false
    },
  });
};
export const showCardsComics = () => async (dispatch) => {
  dispatch(showsScrollButtonsCharacters(false));
  dispatch(showsScrollButtonsComics(true));
  dispatch({
    type: "ACTIVAR_CARDS_COMICS_EXITO",
    payload: {
      cardsComics: true,
    },
  });
  dispatch({
    type: "ACTIVAR_CARDS_PERSONAJES_EXITO",
    payload: {
      cardsCharacters: false,
    },
  });
  dispatch({
    type: "ACTIVAR_COMIC_FULL_EXITO",
    payload: {
      comicFullShow: false,
    },
  });
};

  export const showComicFull = () => async (dispatch) => {
    dispatch(showButtons(false));
    dispatch({
      type: "ACTIVAR_COMIC_FULL_EXITO",
      payload: {
        comicFullShow: true
      },
    });    
    dispatch({
      type: "ACTIVAR_CARDS_PERSONAJES_EXITO",
      payload: {
        cardsCharacters: false
      },
      
    });
    dispatch({
      type: "ACTIVAR_CARDS_COMICS_EXITO",
      payload: {
        cardsComics: false
      },
    });

  };



