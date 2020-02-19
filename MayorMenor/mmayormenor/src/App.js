import React from 'react';
//import './App.css';
import Cartas from "./components/Cartas";
import Jumbo from "./components/Jumbo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Jumbo />
        <Cartas />
      </header>
    </div>
  );
}

export default App;
