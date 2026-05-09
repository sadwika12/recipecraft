import React from "react";
import IngredientList from "./components/ingredientlist";
import RecipeText from "./components/recipetext";

function MainPage() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const recipeRef = React.useRef(null);

  React.useEffect(() => {
    if (recipeShown && recipeRef.current) {
      const y = window.scrollY + recipeRef.current.getBoundingClientRect().top - 24;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [recipeShown]);

  async function getRecipe() {
    setLoading(true);
    setRecipeShown("");
    try {
      const response = await fetch("http://localhost:5000/api/recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients }),
      });

      const data = await response.json();

      if (data?.recipe) {
        setRecipeShown(data.recipe);
      } else {
        setRecipeShown(`⚠️ ${data?.error || "Error fetching recipe."}`);
      }
    } catch (err) {
      console.error("Frontend error:", err);
      setRecipeShown("⚠️ Could not connect to the server. Make sure the backend is running.");
    } finally {
      setLoading(false);
    }
  }

  function addIngredient(formData) {
    const ingredient = formData.get("ingredient")?.trim();
    if (ingredient && !ingredients.includes(ingredient)) {
      setIngredients((prev) => [...prev, ingredient]);
    }
  }

  return (
    <main>
      <section className="hero">
        <div className="hero-badge">
          <span>✦</span> AI-Powered Recipes
        </div>
        <h1>
          Turn your ingredients into a delicious meal
        </h1>
        <p>
          Add whatever's in your fridge or pantry and let AI craft the perfect recipe — no meal planning needed.
        </p>
      </section>

      <div className="input-section">
        <div className="input-card">
          <label className="input-label" htmlFor="ingredient-input">
            Add an ingredient
          </label>
          <form
            className="form-row"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              addIngredient(formData);
              e.target.reset();
            }}
          >
            <input
              id="ingredient-input"
              type="text"
              placeholder="e.g. chicken, garlic, tomatoes…"
              className="user-input"
              name="ingredient"
              autoComplete="off"
            />
            <button type="submit" className="add-ingredient">
              + Add
            </button>
          </form>
        </div>
      </div>

      {ingredients.length > 0 && (
        <IngredientList
          ingredients={ingredients}
          getRecipe={getRecipe}
          ref={null}
        />
      )}

      <div ref={recipeRef}>
        {(loading || recipeShown) && (
          <RecipeText recipeShown={recipeShown} loading={loading} />
        )}
      </div>

      <footer className="footer">
        Made with ♥ · Powered by Gemini AI
      </footer>
    </main>
  );
}

export default MainPage;
