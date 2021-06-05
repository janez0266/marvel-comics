import React from "react";
import "./App.css"
import Nav from "./components/Nav";
import Galeria from "./components/Galeria"


const App = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <div className="main">
        <Galeria />
      </div>      
    </div>
  );
}

export default App;

