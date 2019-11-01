import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PlayerList from "./components/PlayerList";

function App() {
  return (
    <div className="App">
      <h1>Women's World Cup Google Searches</h1>
      <PlayerList />
    </div>
  );
}

export default App;
