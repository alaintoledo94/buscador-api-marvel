import React from "react";

export const ChampGridItem = (props) => {
  console.log(props);

  return (
    <div className="card mt-5">
      <h2>{props.name}</h2>
      <img
        src={`${props.foto.path}.${props.foto.extension}`}
        alt={props.name}
      />

      <p>{props.desc}</p>
      <div className="comics">
        <h2>Comics</h2>
        <ul>
          {props.comics.map((comic, index) => (
            <li key={index}>{comic.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
