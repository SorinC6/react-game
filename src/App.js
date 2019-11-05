import React, { useContext, useReducer } from "react";
import "./App.css";
import Deck from "./components/Deck";
import reducer from "./reducer";
import Context from "./context";
import Header from "./components/Header";

function App() {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Context.Provider value={{ state, dispatch }}>
        <Header />
        <Deck />
      </Context.Provider>
    </div>
  );
}

export default App;
