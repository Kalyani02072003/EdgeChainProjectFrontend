import React from 'react';
import RecipeForm from './components/RecipeForm';

const App: React.FC = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <RecipeForm />
    </div>
  );
};

export default App;
