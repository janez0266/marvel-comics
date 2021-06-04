import React, {useEffect, useState } from 'react'
import "./Galeria.css"
import MarvelAPI from '../APIS/MarvelAPI';
import Cards from "./Cards"

  

const Galeria = () => {
    const [posts, setPosts] = useState([]); 
    // const [cargando, setCargando] = useState(false)

    // handleOnChange = (e) => this.setState({
    //     [e.target.name]: e.target.value
    // })

    useEffect(() => {
        const api = new MarvelAPI();
        api.getMarvelList()
            .then(json => {
                const res = json;
                const cards = res.data.results;
                setPosts(...posts, cards);                

            })
            .catch(err => console.log(err))
    }, []);
 
    const urlGetKey = new MarvelAPI();
    const key = urlGetKey.urlString();
    return (
        <div className="contenedor" >
            <Cards cardItems={posts} urlKey={key} />
        </div >
    )

}

export default Galeria;
