import React, { useState, useEffect } from "react";
import pokemonJSON from "../../data/pokemon.json";
import PokemonItem from "../PokemonItem/PokemonItem";

function PokemonList({ words }) {
  const [pokemons] = useState(pokemonJSON);
  const [filterPokemons, setFilterPokemons] = useState(pokemonJSON);

  useEffect(() => {
    let search = pokemons.filter((item) => {
      return item.name.toLowerCase().includes(words);
    })
    setFilterPokemons(search);
  }, [words]);

  return (
    <div>
      <div className="list-pokemon d-flex flex-wrap justify-content-center gap-3 my-3">
        {filterPokemons.length == 0 ? (
          <div>Data tidak ditemukan!</div>
        ) : (
          filterPokemons.map((item) => <PokemonItem key={item.id} pokemons={item} />)
        )}
      </div>
    </div>
  );
}

export default PokemonList;
