# Recipe Generator App

## Overview

This is a **Recipe Generator and Meal Planning** web application designed to help users generate customized recipes, meal plans, and nutritional information. The app leverages the power of **OpenRouter API** with **Mistral model** and the **Hugging Face model** for natural language processing tasks. It allows users to create personalized meal plans for a week, generate recipe suggestions, and even translate the content into different languages.

### Features
- **Generate Recipes**: Based on user input, the app generates unique recipe ideas using AI.
- **Meal Planning**: The app can generate a meal plan for an entire week, tailored to the user's dietary needs.
- **Nutritional Information**: Users can get nutritional details (calories, protein, carbs, etc.) for any ingredient or meal.
- **Language Translation**: The app can translate recipe instructions and meal plans into multiple languages.

## Key Technologies

- **OpenRouter API**: Used for interacting with the Mistral model for text generation tasks (like recipe and meal plan generation).
- **Mistral Model**: A generative AI model powered by OpenRouter, used to generate creative content such as recipes and meal plans.
- **Hugging Face Model**: This model is used for translating text to the desired language, powered by the Hugging Face API.

## How It Works

1. **Backend (Server-side)**:
   - The server is built using **Typescript**.
   - The backend communicates with **OpenRouter API** using the Mistral model to generate responses for recipe generation and meal planning.
   - It also uses **Hugging Face API** for translating text to the desired language.

2. **Frontend (Client-side)**:
   - The frontend is a **React.js** application hosted on **Vercel**.
   - The app allows users to input their dietary preferences, and then it communicates with the backend to generate recipes, meal plans, and nutritional information.
   - It uses **Axios** to make HTTP requests to the backend, which is deployed on **Vercel**.

3. **Endpoints**:
   - **POST /generate**: Accepts an ingredient or dish name and generates a recipe using the Mistral model.
   - **POST /nutrition**: Accepts an ingredient or dish name and returns nutritional information.
   - **POST /mealplan**: Accepts a dietary preference (e.g., vegetarian, keto) and generates a weekly meal plan. This can also be translated into the desired language.

4. **CORS**:
   - The application is hosted on a separate domain (frontend: `https://frontend-omega-six-16.vercel.app`), and the backend is configured to allow **CORS** from this domain to ensure that API requests are allowed.

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   cd <project_directory>

### Install Dependencies

For backend:

```bash
npm install
```

For frontend (React):

```bash
npm install
```

### Set Up Environment Variables

Create a `.env` file in the backend project and set your OpenRouter API key:

```makefile
OPENROUTER_API_KEY=your_api_key_here
```

### Start the Backend

```bash
npm start
```

### Start the Frontend

```bash
npm start
```

Open your browser and visit `http://localhost:3000` to interact with the app.

## Deployment

This project is deployed using **Vercel**. The frontend and backend are both deployed separately, with the backend providing the API endpoints and the frontend making API calls to these endpoints.

- **Frontend URL**: [https://frontend-omega-six-16.vercel.app/](https://frontend-omega-six-16.vercel.app/)
- **Backend URL**: [https://backend-three-mocha.vercel.app/](https://backend-three-mocha.vercel.app/)

## API Integration

### OpenRouter (Mistral Model)

The app uses the **Mistral model** provided by **OpenRouter** to generate recipe suggestions and meal plans. Mistral is a powerful generative language model that understands natural language queries and can provide coherent responses for tasks like:

- Recipe generation based on ingredients or cuisine preferences.
- Meal planning for multiple days with varied recipes.

#### Example API Request (for generating a recipe):

```json
{
  "input": "Chicken Alfredo",
  "language": "en"
}
```

### Hugging Face (Translation)

The app uses the **Hugging Face** model to handle text translations for users who want recipe instructions or meal plans in different languages.

#### Example Translation Request:

```json
{
  "text": "Generate a simple meal plan for chicken for 7 days",
  "targetLanguage": "es"
}
```

## Troubleshooting

- **CORS Errors**: Ensure that both the frontend and backend domains are correctly set in the CORS configuration.
- **Timeout Issues**: If requests take too long to process, try optimizing backend functions or consider using serverless functions with longer timeouts.
