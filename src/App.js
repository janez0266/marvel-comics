import React from "react";
import "./App.css"
import Nav from "./components/Nav";
import Galeria from "./components/Galeria"
import { Provider } from "react-redux";
import generateStore from "./redux/store"



const App = () => {
  const store = generateStore();
  return (
    <Provider store={store}>
      <div>
        <header>
          <Nav />
        </header>
        <div className="main">
          <Galeria />
        </div>      
      </div>
    </Provider>

  );
}

export default App;

