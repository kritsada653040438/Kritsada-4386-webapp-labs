import { recipes } from './data-q2.js';

export default function RecipeList() {
  const recipeList = recipes.map(recipe => {
    return (
      <li key={recipe.id}>
        <h2>{recipe.name}</h2>
        <ul>
          {recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
        </ul>
      </li>
    );
  });
  return (
    <div>
      <h1>Recipes</h1>
      <ul>{recipeList}</ul>
    </div>
  );
}