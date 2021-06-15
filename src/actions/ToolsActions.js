export const loadingWindows = (data) => async (dispatch) => {
  dispatch({
    type: "ACTIVAR_VENTANA_LOADING_EXITO",
    payload: {
      loadingWindow: data,
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
