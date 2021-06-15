import md5 from "react-native-md5";
import BackImg from "../images/marvel-characters.jpg";

   
const API_KEY_PUBLIC = process.env.REACT_APP_API_PUBLIC_KEY;
const API_KEY_PRIVATE =process.env.REACT_APP_API_PRIVATE_KEY;
const API_TIMESTAMP = new Date().toISOString();
const API_HASH = md5.hex_md5(API_TIMESTAMP + API_KEY_PRIVATE + API_KEY_PUBLIC);
const URL_STRING_KEY = "apikey=" + API_KEY_PUBLIC + "&ts=" + API_TIMESTAMP + "&hash=" + API_HASH;

export const urlStringKey = URL_STRING_KEY;


export const mostrarImagen =(imagenPath) =>{
    const badImage =
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
    
    if (badImage === imagenPath) {
        return BackImg;
    } else {
        return imagenPath + "?" + URL_STRING_KEY;
    }
    }



