import React from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import PokemonList from './components/PokemonList/PokemonList';

function App() {
  return (
    <div className="d-flex flex-column align-items-center m-5">
      <Searchbar />
      <PokemonList/>
    </div>
  );
}



export default App;
