import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

if (!process.env.GEMINI_API_KEY) {
  console.error("Gemini API key is missing. Please check your .env file.");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const SYSTEM_PROMPT = `You are a helpful assistant that generates recipes.
Given a list of ingredients, suggest a recipe with clear steps.
Format your response in markdown: use ## for the recipe title, 
### Ingredients for the ingredient list, and ### Steps for the cooking steps.
Keep it practical, tasty, and beginner-friendly.`;

app.post("/api/recipe", async (req, res) => {
  const { ingredients } = req.body;

  if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
    return res.status(400).json({ error: "Ingredients must be a non-empty array." });
  }

  try {
    const prompt = `${SYSTEM_PROMPT}\n\nI have these ingredients: ${ingredients.join(", ")}. Suggest a recipe.`;
    
    const result = await model.generateContent(prompt);
    const recipe = result.response.text();

    res.json({ recipe });
  } catch (err) {
    console.error("Gemini API error:", err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));