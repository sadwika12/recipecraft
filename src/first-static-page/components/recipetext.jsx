import ReactMarkdown from "react-markdown";

export default function RecipeText(props) {
  if (props.loading) {
    return (
      <div className="loading-card">
        <div className="loading-spinner"></div>
        <p>Crafting your perfect recipe...</p>
      </div>
    );
  }

  return (
    <section className="recipe-section">
      <div className="recipe-card">
        <div className="recipe-card-header">
          <span className="recipe-icon">📖</span>
          <h2>Your Recipe</h2>
        </div>
        <div className="recipe-body">
          <ReactMarkdown>{props.recipeShown}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
}
