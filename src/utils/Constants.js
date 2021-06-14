import { useDispatch } from "react-redux";
import { setFavoriteStar } from "../reducers/FavoriteReducer";
import star from "../images/star_favorite.png";
import yellowStar from "../images/favoritesilver.png"
import { useSelector } from "react-redux";




export const verify = (value) => {
    if(value == undefined) value="N/D";
        return value

}

export const capitalCase = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const fecha = (fecha) => {
    if(fecha){
        const arreglo = fecha.split("T");
    return arreglo[0];
    }
   
}

export const mostrarEstrella = () =>{
	const showFavoriteStar = useSelector((store) => store.favorite.favoriteStarNav)
		if(showFavoriteStar){
			return yellowStar;
		}else {
			return star;
		}
	}

export const addCharToFavorite = (nameIn, idIn, imgPath, imgExtension) => {
    const dispatch = useDispatch();
    const miObjetoFav = {
      id: idIn,
      name: nameIn,
      thumbnail: {
        path: imgPath,
        extension: imgExtension,
      },
    };
  
    const datos_existentes =
      JSON.parse(localStorage.getItem("favPersonajes")) || [];
    console.log("buscar id: ", datos_existentes.find( data => data.id === idIn));
    const res = datos_existentes.find( data => data.id === idIn)
    if (!res) {
      datos_existentes.push(miObjetoFav);
      localStorage.setItem("favPersonajes", JSON.stringify(datos_existentes));
      dispatch(setFavoriteStar(true))
    }
  
  };