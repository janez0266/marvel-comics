import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import Layout from "./components/Layout";

const App = () => {
  const store = generateStore();
  return (
    <Router>
      <Provider store={store}>
       <Layout/>
      </Provider>
    </Router>
  );
};

export default App;
