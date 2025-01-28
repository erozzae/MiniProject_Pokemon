import React, { useState } from "react";
import pokemonJSON from "../../data/pokemon.json";

function PokemonList() {
  const [pokemons] = useState(pokemonJSON);
  return (
    <div>
        {
            pokemons.map(item => (
                <div>{item.name}</div>
            ))
        }
    </div>
  );
}

export default PokemonList;
