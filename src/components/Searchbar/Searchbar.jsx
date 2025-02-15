import React, { useState } from "react";
import styles from "./Searchbar.module.css";

function Searchbar() {
  const [Number, setNumber] = useState(0);

  function addNumber() {
    setNumber(Number+1);
  }

  function substractNumber() {
    setNumber(Number-1);
  }

  return (
    <div className="w-100 d-flex flex-column align-items-center">
      <div
        className={`border-end border-bottom border-black border-3 rounded mb-4 ${styles.search}`}
      >
        <input
          className="w-100 border border-black border-2 rounded"
          type="search"
          name="search"
          id="search"
        />
      </div>
      <div className="plusMinBtn">
        <button onClick={addNumber}>+</button>
        <h2>{Number}</h2>
        <button onClick={substractNumber}>-</button>
      </div>
    </div>
  );
}

export default Searchbar;
