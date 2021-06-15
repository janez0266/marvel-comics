import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import Busqueda from "../pages/Busqueda";
import Favoritos from "../pages/Favoritos";
import Home from "../pages/Home";
import Buttons from "./Buttons";
import ComicsFull from "./ComicsFull";
import Modal from "./Modal";
import Nav from "./Nav";
import Popup from "./Popup";
import WaitLoading from "./WaitLoading";
const Layout = () => {
  const loading = useSelector((store) => store.tools.loadingWindow);
  const showPopup = useSelector((store) => store.tools.showPopupWindow);
  const msgPopup = useSelector((store) => store.tools.mensajePopupWindow);
  return (
    <div>
      <header>
        <Nav />
      </header>
      <Buttons estado={true} />
      <div
        className="main"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: 100,
        }}
      >
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Busqueda} path="/busqueda/:input" />
          <Route component={Favoritos} path="/favoritos" />
          <Route exact path={`/comics/:comicId`} component={ComicsFull} />
        </Switch>
        <WaitLoading estado={loading} />
        <Popup estado={showPopup} mensaje={msgPopup} />
        <Modal />
        {/* <Galeria /> */}
      </div>
    </div>
  );
};

export default Layout;
