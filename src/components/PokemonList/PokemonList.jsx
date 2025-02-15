import React, { useState } from "react";
import pokemonJSON from "../../data/pokemon.json";
import PokemonItem from "../PokemonItem/PokemonItem";

function PokemonList() {
  const [pokemons] = useState(pokemonJSON);
  return (
    <div>
      <div className="list-pokemon d-flex flex-wrap justify-content-center gap-3 my-3">
        {pokemons.map((item) => (
          <PokemonItem key={item.id} pokemons={item}/>
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
