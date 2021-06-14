import React from "react";
import PropTypes from "prop-types";
//import star from "../images/star_favorite_white.png";
import { mostrarImagen } from "../APIS/MarvelKey";
import { useDispatch } from "react-redux";
import { getComicFull } from "../actions/ComicsActions";
import { showComicFull } from "../actions/ToolsActions";
import "../styles/CardsComics.css";
import { verify } from "../utils/Constants";
import CardStarComic from "./CardStarComic";
import { useHistory, useRouteMatch } from "react-router";

const CardsComics = ({ comic }) => {
  const dispatch = useDispatch();
  let { path, url } = useRouteMatch();
  const history = useHistory();
  //console.log("comic.id: ", comic.id);
  //console.log("Url:", url)
  return (
    <div className="cardsC" key={comic.id} style={{ display: "flex" }}>
      <div
        className="cardImageC"
        onClick={() => {
          history.push(`${url}/${comic.id}`);
          // dispatch( getComicFull( comic.id, comic.title, comic.description,
          //     mostrarImagen(comic.thumbnail.path + "." + comic.thumbnail.extension ),
          //     verify(comic.dates[0].date),comic.creators.items,
          //     verify(comic.urls[0].url) ) );
        }}
      >
        <img
          src={mostrarImagen(
            comic.thumbnail.path + "." + comic.thumbnail.extension
          )}
        />
      </div>
      <CardStarComic itemComicValues={comic} />
      <div className="nameC">
        <h2>{comic.title}</h2>
      </div>
    </div>
  );
};

// CardsComics.propTypes = {
//   estado: PropTypes.bool,
//   cardItems: PropTypes.array,
//   item: PropTypes.shape({
//       name: PropTypes.string,
//       thumbnail: PropTypes.shape({
//         path: PropTypes.string,
//         extension: PropTypes.string
//       })
//     })

// }

export default CardsComics;

// import React from "react";
// import PropTypes from 'prop-types';
// //import star from "../images/star_favorite_white.png";
// import {mostrarImagen} from "../APIS/MarvelKey"
// import {useDispatch} from "react-redux";
// import {getComicFull} from "../APIS/ComicsAPI"
// import {showComicFull} from "../APIS/ToolsActions"
// import "../styles/CardsComics.css";
// import {verify} from "../utils/Constants"
// import CardStarComic from "./CardStarComic";

// const CardsComics = (props) => {
//   const dispatch = useDispatch();
//   return (
//     <>
//       {props.cardItems && props.cardItems.map((item, idx) => (
//           <div className="cardsC" key={idx}
//             style={{ display: `${props.estado ? "flex" : "none"}`}}  onClick={() => {
//               dispatch(showComicFull());
//               dispatch(getComicFull(item.id, item.title, item.description,
//               mostrarImagen(item.thumbnail.path + "." + item.thumbnail.extension),
//               verify(item.dates[0].date),
//               item.creators.items,
//               verify(item.urls[0].url) ))}}>
//             <div className="cardImageC">
//               <img src={mostrarImagen(item.thumbnail.path + "." + item.thumbnail.extension )} />
//             </div>
//             <CardStarComic itemComicValues={item} />
//             <div className="nameC">
//               <h2>{item.title}</h2>
//             </div>
//           </div>
//         ))}
//     </>
//   );
// };

// CardsComics.propTypes = {
//   estado: PropTypes.bool,
//   cardItems: PropTypes.array,
//   item: PropTypes.shape({
//       name: PropTypes.string,
//       thumbnail: PropTypes.shape({
//         path: PropTypes.string,
//         extension: PropTypes.string
//       })
//     })

// }

// export default CardsComics;
