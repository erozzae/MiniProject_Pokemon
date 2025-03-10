import React, { useState } from "react";
import styles from "./Searchbar.module.css";
import PokemonList from "../PokemonList/PokemonList";

function Searchbar() {
  const [Number, setNumber] = useState(0);
  const [words, setWords] = useState("")

  function addNumber() {
    setNumber(Number+1);
  }

  function substractNumber() {
    setNumber(Number-1);
  }

  const handleTyping = (e) => {
    setWords(e.target.value)
  }

  return (
    <div className="w-100 d-flex flex-column align-items-center">
      <div
        className={`border-end border-bottom border-black border-3 rounded mb-3 ${styles.search}`}
      >
        <input
          className="w-100 border border-black border-2 rounded"
          placeholder="cari pokemon..."
          type="search"
          name="search"
          id="search"
          onChange={handleTyping}
        />
      </div>
      {/* <div className="plusMinBtn">
        <button onClick={addNumber}>+</button>
        <h2>{Number}</h2>
        <button onClick={substractNumber}>-</button>
      </div> */}
      <PokemonList words={words}/>
    </div>
  );
}

export default Searchbar;
