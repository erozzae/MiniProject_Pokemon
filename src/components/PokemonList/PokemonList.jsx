import React, { useState } from "react";
import pokemonJSON from "../../data/pokemon.json";

function PokemonList() {
  const [pokemons] = useState(pokemonJSON);
  return (
    <div>
      <div className="list-pokemon d-flex flex-wrap justify-content-center gap-3 my-3">
        {pokemons.map((item) => (
          <h1>{item.name}</h1>
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
