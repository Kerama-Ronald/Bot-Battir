import React from "react";

const SortBar = ({ sortBy }) => {
  return (
    <div className="sort-bar">
      <label htmlFor="sort-select">Sort By:</label>
      <select id="sort-select" onChange={(e) => sortBy(e.target.value)}>
        <option value="">--Select--</option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
};

export default SortBar;
