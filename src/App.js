import React from "react";
import "./App.css"
import Nav from "./components/Nav";
import Galeria from "./components/Galeria"

// import styled from 'styled-component';
// const StyledApp = styled.div`
//   font-family: sans-serif;
//   text-align: center;
//   `;

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

