// constantes
const dataInicial = {
  loadingWindow: false,
  comicFullShow: false, // Oculta o muestra el comics a pantalla completa
  showPopupWindow: false,
  mensajePopupWindow: "",
  isModalOpen: false,
};

export default function toolsReducer(state = dataInicial, action) {
  switch (action.type) {
    case "ACTIVAR_VENTANA_LOADING_EXITO":
      return { ...state, loadingWindow: action.payload.loadingWindow };
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
