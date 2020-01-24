import React from "react";

export const Card = props => {
  return (
    <div>
      <h1>Name: {[props.item.name]}</h1>
      <h3>Age: {props.item.age}</h3>
      <h3>Height: {props.item.height}</h3>
    </div>
  );
};
