export const loadingWindows = (data) => async (dispatch) => {
  dispatch({
    type: "ACTIVAR_VENTANA_LOADING_EXITO",
    payload: {
      loadingWindow: data,
    },
  });
};
export const showButtons = (data) => async (dispatch) => {
  dispatch({
    type: "ACTIVAR_BOTONES_EXITO",
    payload: {
      showButtons: data,
    },
  });
};
export const showsScrollButtonsCharacters = (data) => async (dispatch) => {
  dispatch({
    type: "ACTIVAR_BOTONES_SCROLL_CARDS_PERSONAJES",
    payload: {
      showButtonsScrollCards: data,
    },
  });
};
export const showsScrollButtonsComics = (data) => async (dispatch) => {
  dispatch({
    type: "ACTIVAR_BOTONES_SCROLL_CARDS_COMICS",
    payload: {
      showButtonsScrollCardsComics: data,
    },
  });
};
export const showCardsCharacters = () => async (dispatch) => {
  dispatch(showsScrollButtonsCharacters(true));
  dispatch(showsScrollButtonsComics(false));
  dispatch({
    type: "ACTIVAR_CARDS_PERSONAJES_EXITO",
    payload: {
      cardsCharacters: true,
    },
  });
  dispatch({
    type: "ACTIVAR_CARDS_COMICS_EXITO",
    payload: {
      cardsComics: false,
    },
  });
  dispatch({
    type: "ACTIVAR_COMIC_FULL_EXITO",
    payload: {
      comicFullShow: false,
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
      comicFullShow: true,
    },
  });
  dispatch({
    type: "ACTIVAR_CARDS_PERSONAJES_EXITO",
    payload: {
      cardsCharacters: false,
    },
  });
  dispatch({
    type: "ACTIVAR_CARDS_COMICS_EXITO",
    payload: {
      cardsComics: false,
    },
  });
};
export const showPopupWindow = (msg) => async (dispatch) => {
  dispatch({
    type: "ACTIVAR_VENTANA_POPUP",
    payload: {
      showPopupWindow: true,
      mensajePopupWindow: msg,
    },
  });
  setTimeout(function () {
    dispatch({
      type: "ACTIVAR_VENTANA_POPUP",
      payload: {
        showPopupWindow: false,
      },
    });
  }, 3000);
};
export const activarModal = () => async (dispatch) => {
  dispatch({
    type: "ACTIVAR_MODAL",
  });
};

export const desactivarModal = () => async (dispatch) => {
  dispatch({
    type: "DESACTIVAR_MODAL",
  });
};
