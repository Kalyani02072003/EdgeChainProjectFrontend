// import React, { useState } from 'react';
// import axios from 'axios';
// import ReactMarkdown from 'react-markdown'; // Import the react-markdown library

// const RecipeForm: React.FC = () => {
//   const [input, setInput] = useState<string>('');
//   const [recipe, setRecipe] = useState<string | null>(null);
//   const [translatedRecipe, setTranslatedRecipe] = useState<string | null>(null);  // State for translated recipe
//   const [ingredients, setIngredients] = useState<string[] | null>(null);
//   const [mealPlan, setMealPlan] = useState<string[] | null>(null);
//   const [language, setLanguage] = useState<string>('en'); // Default language is English
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setLanguage(event.target.value);
//   };

//   const handleGenerate = async () => {
//     if (!input.trim()) {
//       setError('Please enter dietary preferences.');
//       return;
//     }
//     setLoading(true);
//     setError(null);  // Clear previous errors
//     try {
//       const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/generate`, { input, language });
//       setRecipe(response.data.recipe);
//       setIngredients(response.data.ingredients); // Set ingredients

//       // If the language is not English, translate the recipe
//       if (language !== 'en') {
//         setTranslatedRecipe(response.data.recipe);  // Set translated recipe
//       } else {
//         setTranslatedRecipe(null);  // No translation needed
//       }
//     } catch (error) {
//       console.error('Error generating recipe:', error);
//       setError('Error generating recipe. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGenerateMealPlan = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/generate-meal-plan`, { input, language });
//       setMealPlan(response.data.mealPlan);
//     } catch (error) {
//       console.error('Error generating meal plan:', error);
//       setError('Error generating meal plan. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center" style={{
//       background: 'linear-gradient(90deg, hsla(171, 87%, 67%, 1) 0%, hsla(236, 100%, 72%, 1) 100%)',
//       filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#61f4de", endColorstr="#6e78ff", GradientType=1 )'
//     }}>
//       <div className="w-full max-w-lg bg-white bg-opacity-30 backdrop-blur-lg rounded-xl p-8 shadow-lg">
//         <h1 className="text-4xl font-bold text-center text-white mb-6">Recipe Generator</h1>
        
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Enter your dietary preferences"
//           className="w-full border border-gray-300 rounded-md p-3 mb-4 text-black"
//         />
        
//         {/* Language Selector */}
//         <select
//           value={language}
//           onChange={handleLanguageChange}
//           className="w-full border border-gray-300 rounded-md p-3 mb-4 text-black"
//         >
//           <option value="en">English</option>
//           <option value="es">Spanish</option>
//           <option value="fr">French</option>
//           {/* Add more languages here */}
//         </select>

//         <button
//           onClick={handleGenerate}
//           className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
//           disabled={loading}
//         >
//           {loading ? 'Generating...' : 'Generate Recipe'}
//         </button>

//         <button
//           onClick={handleGenerateMealPlan}
//           className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 mt-4 transition duration-300"
//           disabled={loading}
//         >
//           Generate Meal Plan
//         </button>

//         {error && (
//           <div className="mt-4 text-red-500 text-center">{error}</div>
//         )}

//         {recipe && (
//           <div className="mt-6 bg-white bg-opacity-80 backdrop-blur-lg p-4 rounded-md shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Your Recipe:</h2>
//             {/* Render the recipe as Markdown */}
//             <div className="prose text-black">
//               <ReactMarkdown>{translatedRecipe || recipe}</ReactMarkdown>
//             </div>

//           </div>
//         )}

//         {mealPlan && (
//           <div className="mt-6 bg-white bg-opacity-80 backdrop-blur-lg p-4 rounded-md shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Your Meal Plan:</h2>
//             <ul>
//               {mealPlan.map((dailyRecipe, index) => (
//                 <li key={index}>
//                   <strong>Day {index + 1}:</strong> <ReactMarkdown>{dailyRecipe}</ReactMarkdown>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>

//       <footer className="absolute bottom-0 w-full text-center py-4 text-white">
//         <p>Made by Kalyani Patra | 
//           <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="ml-2">
//             <i className="fab fa-github"></i> GitHub
//           </a>
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default RecipeForm;

import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'; // Import the react-markdown library

const RecipeForm: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [recipe, setRecipe] = useState<string | null>(null);
  const [translatedRecipe, setTranslatedRecipe] = useState<string | null>(null);
  const [ingredients, setIngredients] = useState<string[] | null>(null);
  const [mealPlan, setMealPlan] = useState<string[] | null>(null);
  const [nutritionalValues, setNutritionalValues] = useState<string | null>(null); // State for nutritional values
  const [language, setLanguage] = useState<string>('en'); // Default language is English
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  const handleGenerate = async () => {
    if (!input.trim()) {
      setError('Please enter dietary preferences.');
      return;
    }
    setLoading(true);
    setError(null); 
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/generate`, { input, language });
      setRecipe(response.data.recipe);
      setIngredients(response.data.ingredients); 

      const nutritionResponse = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/nutrition`, { input });
      setNutritionalValues(nutritionResponse.data.nutritionalValues); // Set nutritional values
      
      if (language !== 'en') {
        setTranslatedRecipe(response.data.recipe); 
      } else {
        setTranslatedRecipe(null); 
      }
    } catch (error) {
      console.error('Error generating recipe:', error);
      setError('Error generating recipe or nutritional values. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateMealPlan = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/mealplan`, { input, language });
      setMealPlan(response.data.mealPlan);
    } catch (error) {
      console.error('Error generating meal plan:', error);
      setError('Error generating meal plan. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center" style={{
      background: 'linear-gradient(90deg, hsla(171, 87%, 67%, 1) 0%, hsla(236, 100%, 72%, 1) 100%)',
      filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#61f4de", endColorstr="#6e78ff", GradientType=1 )'
    }}>
      <div className="mt-5 mb-5 w-full max-w-2xl sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-2xl bg-white bg-opacity-30 backdrop-blur-lg rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-center text-white mb-6">Recipe Generator</h1>
        
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your dietary preferences"
          className="w-full border border-gray-300 rounded-md p-3 mb-4 text-black"
        />
        
        {/* Language Selector */}
        <select
          value={language}
          onChange={handleLanguageChange}
          className="w-full border border-gray-300 rounded-md p-3 mb-4 text-black"
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          {/* Add more languages here */}
        </select>

        <button
          onClick={handleGenerate}
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Recipe'}
        </button>

        <button
          onClick={handleGenerateMealPlan}
          className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 mt-4 transition duration-300"
          disabled={loading}
        >
          Generate Meal Plan
        </button>

        {error && (
          <div className="mt-4 text-red-500 text-center">{error}</div>
        )}

        {recipe && (
          <div className="mt-6 bg-white bg-opacity-80 backdrop-blur-lg p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Your Recipe:</h2>
            {/* Render the recipe as Markdown */}
            <div className="prose text-black">
              <ReactMarkdown>{translatedRecipe || recipe}</ReactMarkdown>
            </div>
          </div>
        )}

        {nutritionalValues && (
          <div className="mt-6 bg-white bg-opacity-80 backdrop-blur-lg p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Nutritional Values:</h2>
            <div className="prose text-black">
              <ReactMarkdown>{nutritionalValues}</ReactMarkdown>
            </div>
          </div>
        )}

        {mealPlan && (
          <div className="mt-6 bg-white bg-opacity-80 backdrop-blur-lg p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Your Meal Plan:</h2>
            <ul>
              {mealPlan.map((dailyRecipe, index) => (
                <li key={index}>
                  <strong>Day {index + 1}:</strong> <ReactMarkdown>{dailyRecipe}</ReactMarkdown>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <footer className="absolute bottom-0 w-full text-center py-4 text-white">
        <p>Made by Kalyani Patra | 
          <a href="https://github.com/Kalyani02072003" target="_blank" rel="noopener noreferrer" className="ml-2">
            <i className="fab fa-github"></i> GitHub
          </a>
        </p>
      </footer>
    </div>
  );
};

export default RecipeForm;
