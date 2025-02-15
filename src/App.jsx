import React from "react";
import PokemonList from './components/PokemonList/PokemonList';
import Searchbar from "./components/Searchbar/Searchbar";

function App() {
  return (
    <div className="d-flex flex-column align-items-center m-5">
      <Searchbar/>
    </div>
  );
}



export default App;
