import md5 from "react-native-md5";


class MarvelAPI {    
    
    API_KEY_PUBLIC = '8e54e231196cb959c59017ddd0381c12';
    API_KEY_PRIVATE = '3ee4f9617a4f82f52a6631829210ad567a28ec72';
    API_TIMESTAMP = new Date().toISOString();
    API_HASH = md5.hex_md5(this.API_TIMESTAMP + this.API_KEY_PRIVATE + this.API_KEY_PUBLIC);
    LIMIT = 8;
    OFFSET = Math.trunc(Math.floor(Math.random() * 1000) + 1);
    //OFFSET = 1000;
    ORDERBY = 'modified';
    URL_STRING = "?apikey=" + this.API_KEY_PUBLIC + "&ts=" + this.API_TIMESTAMP + "&hash=" + this.API_HASH;
    URL_BASE = "https://gateway.marvel.com:443/v1/public/characters"
    URL_NAME_PARAM = "spider-man";

    root = `${this.URL_BASE}?limit=${this.LIMIT}&offset=${this.OFFSET}&orderBy=${this.ORDERBY}&apikey=${this.API_KEY_PUBLIC}&ts=${this.API_TIMESTAMP}&hash=${this.API_HASH}`
    urlString() {
        return this.URL_STRING;
    }
    getMarvelList() {        
        return this.miFetchAcortado(`${this.root}`);
    }
    miFetchAcortado(url) {

        return new Promise((resolve, reject) => {
            // this.setState({ cargando: true })
            fetch(url)
                .then((res) => res.json())
                .then((json) => resolve(json))
                .catch((err) => reject(err));
        });
    }

}

export default MarvelAPI;