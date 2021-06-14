// import favoriteReducer from "../reducers/FavoriteReducer"

// Nav.js
// //mostrar la estrellaen el nav
// <img src={mostrarEstrella()} alt="">



// Constanst.js
// //Busca en el selector si es true o false para mostrar la estrella rquerida
// export const mostrarEstrella = () =>{
//     const showFavoriteStar = useSelector((store) => store.favorite.favoriteStarNav)
//   console.log("mostrar estrella:", showFavoriteStar)
// 		if(showFavoriteStar){
// 			return yellowStar;
// 		}else {
// 			return star;
// 		}
// 	}
// __________________________________________________________________

// Revisar donde se cambia el valor de la variable

// favoriteStarNav = true o false

// favoriteReducer.js

// //aqui se pone en true o false el storage favoriteStarNav
// export const setFavoriteStar = (data) => async (dispatch) => {
//   dispatch({
//     type: "ACTIVAR_ESTRELLA_FAV_NAV",
//     payload: {
//       favoriteStarNav: data,
//     },
//   });
// };

// setFavoriteStar(true o false) //coloca true o false en el store

// ----------------------------------------------

// //ejecutando esto se revisa si esta vacio el localstoraje para poner o quitar la estrella
// export const showNavFavoriteStar = () => async (dispatch) => {
//   const objetoFavCharacter = JSON.parse(localStorage.getItem("favPersonajes"));
//   const objetoFavComics = JSON.parse(localStorage.getItem("favComics"));

//   if (objetoFavCharacter === [] && objetoFavComics === []) {
    
//     return dispatch(setFavoriteStar(false));
//   } else {
//     return dispatch(setFavoriteStar(true));
//   }
// };
// ---------------------------------------------------------

// localStorage.getItem("favPersonajes") ? true : false