import React from "react";
import style from "./recipe.module.css";

export default function Recipe({ title, image, ingredients, url }) {
  let counter = 0;
  return (
    <div className={style.recipe}>
      <h1> {title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li key={(counter += 1)}>{ingredient.text}</li>
        ))}
      </ol>
      <p>Click on the image below to view the recipe in a new tab</p>
      <br></br>
      <img
        className={style.image}
        src={image}
        alt=""
        onClick={() => {
          window.open(url);
        }}
      />
      <br></br>
      <button className="search-button" type="textsubmit">
        Add to Recipes
      </button>
      <br></br>
    </div>
  );
}