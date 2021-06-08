import md5 from "react-native-md5";
import {json_personajes} from "../docs/moc_personajes"
import {json_comics} from "../docs/moc_comics"


class MarvelAPI {    
    API_KEY_PUBLIC = process.env.REACT_APP_API_PUBLIC_KEY;
    API_KEY_PRIVATE =process.env.REACT_APP_API_PRIVATE_KEY;
    API_TIMESTAMP = new Date().toISOString();
    API_HASH = md5.hex_md5(this.API_TIMESTAMP + this.API_KEY_PRIVATE + this.API_KEY_PUBLIC);
    URL_STRING_KEY = "apikey=" + this.API_KEY_PUBLIC + "&ts=" + this.API_TIMESTAMP + "&hash=" + this.API_HASH;
    //URL_STRING_KEY = "apikey=4450ccfed9a33ce8fc53c2227194cf45&ts=2021-06-06T19:15:52.899Z&hash=46312fa58080c77840dd66d0aa52e0db";
    
    urlString() {
        return this.URL_STRING_KEY;
    }
    // getMarvelList() { 
    //     const limit = 8; 
    //     const orderBy = "modified";
    //     const offset =  Math.trunc(Math.floor(Math.random() * 1000) + 1);
    //     const urlBaseCharacters = "https://gateway.marvel.com:443/v1/public/characters"
    //     const urlCharacter = `${urlBaseCharacters}?limit=${limit}&offset=${offset}&orderBy=${orderBy}&${this.URL_STRING_KEY}`
    //     return this.miFetchResults(`${urlCharacter}`);
    //     //return this.miFetchMock();
    // }
    // getMarvelComicsListByID(id) {
    //     const urlBaseComics ="https://gateway.marvel.com:443/v1/public/characters/"+ id +"/comics";
    //     console.log(id, urlBaseComics);
    //     return this.miFetchResults(`${urlBaseComics+"?"+this.URL_STRING_KEY}`);
        
    //     //return this.miFetchMockComics();
    //   }
    // miFetchResults(url) {
    //     return new Promise((resolve, reject) => {
    //         // this.setState({ cargando: true })
    //         fetch(url)
    //             .then((res) => res.json())
    //             .then((json) => resolve(json))
    //             .catch((err) => reject(err));
    //     });
    // }
    miFetchMock() {
        return new Promise((resolve) => {

            resolve(json_personajes);
        });
    }
    miFetchMockComics() {
        return new Promise((resolve) => {

            resolve(json_comics);
        });
    }
}

export default MarvelAPI;