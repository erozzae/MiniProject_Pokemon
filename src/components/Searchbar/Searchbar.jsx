import React from 'react'
import styles from './Searchbar.module.css'

function Searchbar() {
  return (
    <div className={`border-end border-bottom border-black border-3 rounded ${styles.search}`}>
        <input className="w-100 border border-black border-2 rounded"  type="search" name="search" id="search" />
    </div>
  )
}

export default Searchbar