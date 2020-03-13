import React from 'react';
// import logo from './logo.svg';
import './RecipeApp.css';
import Navbar from "./Navbar";
// import Recipe from './Recipe';
import RecipeList from './RecipeList';

class RecipeApp extends React.Component{
  
  static defaultProps={
    recipes:[{
      title:"Spaghetti",
      ingredients:['flour','water'],
      instructions:"Mix Ingredients",
      img:"speggiti.jpeg"
    }]
  };

  render(){
  return (
    <div className="App">
      <Navbar />
      <RecipeList />
    </div>
  );
}
}

export default RecipeApp;
