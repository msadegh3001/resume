import React, { Component } from "react";
const Sortnav = (props) => {
  const { items, onItemSelected, selectedGenre } = props;
  return (
      <ul className="list-group">
      {items.map((genre) => (
          <li
            key={genre.id}
            className={genre.name===selectedGenre.name?'list-group-item active':'list-group-item'}
            onClick={() => onItemSelected(genre)}
          >
            {genre.name}
          </li>
        ))}
      </ul>
  );
};
export default Sortnav;
