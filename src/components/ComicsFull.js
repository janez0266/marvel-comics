import React, { useEffect} from "react";
import ShowCreators from "./ShowCreators";
import { fecha } from "../utils/Constants";
import "../styles/ComicsFull.css";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getComicFullById } from "../actions/ComicsActions";
import {urlStringKey} from "../APIS/MarvelKey"

const ComicsFull = () => {
  const history = useHistory();
  const { comicId } = useParams();
  const dispatch = useDispatch()
  const comicFull = useSelector((store) => store.comics.arrayComicFull) || {};

  useEffect(() => {
    dispatch(getComicFullById(comicId))
  }, [comicId])
  
  if( Object.keys(comicFull).length === 0 ) return null
  return (
    <>
      <div className="comicItemC">
        <div className="imgComiC">
          <img src={ comicFull.thumbnail.path + "." + comicFull.thumbnail.extension + "?" + urlStringKey } />
        </div>
        <div className="infoComiC">
          <div className="infoButtons">
            <a href={comicFull.urls[0]?.url} target="_blank" rel="noreferrer">
              Ver Comic &gt;&gt;
            </a>
            <p
              className="back"
              onClick={() => {
                history.goBack()
              }}
            >
              Volver{" "}
            </p>
          </div>
          <h2> {comicFull.title}</h2>
          <div className="infotext">
            <p>Published: {fecha(comicFull.dates[0]?.date)}</p>
            <p>Creators: </p>
            <ShowCreators creatorsItems={comicFull.creators.items} />
          </div>
          <p className="descripcionC">{comicFull.description} </p>
        </div>
      </div>
    </>
  );
};



export default ComicsFull;
