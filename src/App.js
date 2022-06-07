import "./App.css";
import React from "react";
import { Header } from "semantic-ui-react";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Header as="h1">
        <div className="header1">What God cannot do does not exist!</div>
      </Header>
      <Home />
    </div>
  );
};

export default App;
