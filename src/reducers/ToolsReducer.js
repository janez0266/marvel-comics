// constantes
const dataInicial = {
  loadingWindow: false,
  showButtons: false, //muestra la barra de botones
  showButtonsScrollCards: true, // oculta o muestra los botones de dezplazamiento de las cards de personajes
  showButtonsScrollCardsComics: false, // oculta o muestra los botones de dezplazamiento de las cards de comics
  cardsCharacters: true, //oculta o muestra las cards de personajes
  cardsComics: false, // oculta o muestra las cards de comics
  comicFullShow: false, // Oculta o muestra el comics a pantalla completa
  showPopupWindow: false,
  mensajePopupWindow: "",
  isModalOpen: false,
};

export default function toolsReducer(state = dataInicial, action) {
  switch (action.type) {
    case "ACTIVAR_VENTANA_LOADING_EXITO":
      return { ...state, loadingWindow: action.payload.loadingWindow };
    case "ACTIVAR_BOTONES_EXITO":
      return { ...state, showButtons: action.payload.showButtons };
    case "ACTIVAR_BOTONES_SCROLL_CARDS_PERSONAJES":
      return {
        ...state,
        showButtonsScrollCards: action.payload.showButtonsScrollCards,
      };
    case "ACTIVAR_BOTONES_SCROLL_CARDS_COMICS":
      return {
        ...state,
        showButtonsScrollCardsComics:
          action.payload.showButtonsScrollCardsComics,
      };
    case "ACTIVAR_CARDS_PERSONAJES_EXITO":
      return { ...state, cardsCharacters: action.payload.cardsCharacters };
    case "ACTIVAR_CARDS_COMICS_EXITO":
      return { ...state, cardsComics: action.payload.cardsComics };
    case "ACTIVAR_COMIC_FULL_EXITO":
      return { ...state, comicFullShow: action.payload.comicFullShow };
    case "ACTIVAR_VENTANA_POPUP":
      return {
        ...state,
        showPopupWindow: action.payload.showPopupWindow,
        mensajePopupWindow: action.payload.mensajePopupWindow,
      };
    case "ACTIVAR_MODAL":
      return { ...state, isModalOpen: true };
    case "DESACTIVAR_MODAL":
      return { ...state, isModalOpen: false };
    default:
      return state;
  }
}
