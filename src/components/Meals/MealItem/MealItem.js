import React from "react";

export const MealItem = ({ name, description, price: dollar }) => {
  const price = `$${dollar.toFixed(2)}`;
  return (
    <li>
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div>{price}</div>
      </div>
      <div></div>
    </li>
  );
};
