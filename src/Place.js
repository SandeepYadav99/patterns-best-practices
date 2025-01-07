import React from "react";

const Place = ({ item }) => {
  const { title, description } = item;
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
};

export default Place;
