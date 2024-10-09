/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import '../App.css';

const SearchBar = ({filterText, setFilterText, minDate, setMinDate, maxDate, setMaxDate}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        style={{ marginBottom: '10px' }}
      />

      <br />
      <label>Min Date: </label>
      <input
        type="date"
        pattern="\d{4}-\d{2}-\d{2}"
        value={minDate}
        onChange={(e) => setMinDate(e.target.value)}
        style={{ marginBottom: '10px' }}
      />

      <label>Max Date: </label>
      <input
        type="date"
        pattern="\d{4}-\d{2}-\d{2}"
        value={maxDate}
        onChange={(e) => setMaxDate(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
    </div>
  )
}

export default SearchBar;
