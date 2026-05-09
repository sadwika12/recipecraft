# 🍳 RecipeCraft — AI-Powered Culinary Assistant

RecipeCraft is a full-stack web application that helps users reduce food waste by generating creative recipes from the ingredients they already have.

Powered by Google Gemini AI, RecipeCraft transforms a simple list of ingredients into a structured, easy-to-follow cooking guide.

---

## 🌐 Live Demo

- 🚀 Live at:https://recipecraft-git-master-sadwika12s-projects.vercel.app/

---

## ✨ Features

- 🥕 **Smart Ingredient Input** – Enter ingredients through a clean and intuitive interface.
- 🤖 **AI Recipe Generation** – Uses Google's Gemini 2.5 Flash model to generate high-quality recipes.
- 🌍 **Zero-Waste Cooking** – Encourages the use of leftover ingredients to minimize food waste.
- 📱 **Responsive Design** – Mobile-first design optimized for phones, tablets, and desktops.
- 👨‍💻 **Developer Section** – Includes a "Meet the Developer" page.
- ⚡ **Fast Performance** – Frontend deployed on Vercel and backend on Render.

---

## 🛠️ Tech Stack

### 🎨 Frontend

- React.js (Vite)
- React Router
- CSS3 (Custom Variables & Responsive Design)
- Lucide React Icons

### ⚙️ Backend

- Node.js
- Express.js
- Google Generative AI SDK
- CORS
- Dotenv

### ☁️ Deployment

- Vercel (Frontend)
- Render (Backend)

---
## 📥 Installation

```bash
# 1. Clone the repository
git clone https://github.com/sadwika12/recipecraft.git
cd recipecraft

# 2. Backend setup
cd backend
npm install

# Create .env file
 GEMINI_API_KEY=your_actual_api_key_here
 PORT=5000

# Start backend
node server.js
# Backend runs at http://localhost:5000

# 3. Frontend setup
cd frontend/chat-app
npm install

# Start frontend
npm run dev
# Frontend runs at http://localhost:5173
```
## 🧠 How It Works

1. User enters available ingredients.
2. The React frontend sends a `POST` request to the backend.
3. The Express server forwards the ingredients to Google Gemini AI.
4. Gemini generates a structured recipe.
5. The backend returns the generated recipe to the frontend.
6. The user views the recipe instantly.

## 📈 Future Enhancements

- ❤️ **Save Favorite Recipes:** Allow users to bookmark and organize their most-loved recipes for quick access later.

- 🖼️ **AI-Generated Dish Images:** Generate realistic images of the prepared dish to help users visualize the final result.

- 🌍 **Multi-Language Support:** Provide recipe instructions and ingredient names in multiple languages for global accessibility.

- 🔐 **User Authentication & Profiles:** Enable sign up and login functionality so users can save preferences, favorites, and recipe history.

- 📄 **Export Recipes to PDF:** Download beautifully formatted recipes as PDF files for printing or offline use.

- 🥗 **Dietary Preference Filters:** Support vegetarian, non-vegetarian, and other dietary restrictions.

- ⏱️ **Cooking Time & Difficulty Estimation:** Display estimated preparation time and difficulty level for each recipe.

- 📊 **Nutrition Information:** Show calories, protein, carbohydrates, and other nutritional details.

- 🎤 **Voice Input for Ingredients:** Allow users to speak ingredients instead of typing them manually.


## 🤝 Contributing

Contributions are welcome

```bash
# 1. Fork the repository

# 2. Create a new feature branch
git checkout -b feature/new-feature

# 3. Commit your changes
git commit -m "Add new feature"

# 4. Push the branch to GitHub
git push origin feature/new-feature

# 5. Open a Pull Request for review
