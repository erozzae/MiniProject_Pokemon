import React from "react";
import { colors } from "../../data/colors";
import "./PokemonItem.css"

function PokemonItem({ pokemons }) {
  return (
    <div className="d-flex border border-black border-2 rounded">
      <div
        className="pokemon-card border-end border-bottom border-black border-3 rounded text-center p-2 position-relative overflow-hidden"
        style={{
          backgroundColor: `${pokemons.color}`,
          width: `300px`,
        }}
      >
        <img src={pokemons.imageUrl} alt={pokemons.name} />
        <h1>{pokemons.name}</h1>
        <p className="description bg-white position-absolute text-start py-3 px-2">{pokemons.description}</p>
        <div className="types-container d-flex justify-content-center gap-3 mb-2">
          {pokemons.types.map((item, index) => (
            <span
              key={index}
              className="type-badge border border-black border-2 rounded text-white p-1"
              style={{
                backgroundColor: colors[item.toLowerCase()],
                width: `100px`
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonItem;
