export default function IngredientList(props) {
  const ingredientChips = props.ingredients.map((ingredient) => (
    <li key={ingredient} className="ingredient-chip">
      <span className="chip-dot"></span>
      {ingredient}
    </li>
  ));

  return (
    <section className="ingredients-section">
      <h2 className="ingredients-heading">Your Ingredients</h2>

      <ul className="ingredients-grid">{ingredientChips}</ul>

      {ingredientChips.length > 3 && (
        <div className="recipe-cta-card" ref={props.ref}>
          <div className="recipe-cta-text">
            <h3>Ready to Cook?</h3>
            <p>Generate a personalized recipe from your {props.ingredients.length} ingredients</p>
          </div>
          <button className="get-recipe" onClick={props.getRecipe}>
            ✨ Generate Recipe
          </button>
        </div>
      )}
    </section>
  );
}
