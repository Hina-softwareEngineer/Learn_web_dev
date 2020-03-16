import React from 'react';
// import logo from './logo.svg';
import './RecipeApp.css';
import Navbar from "./Navbar";
// import Recipe from './Recipe';
import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput';

class RecipeApp extends React.Component{

 constructor(props){
   super(props);
   this.state={
     recipe:[
      {id:1,
        title:"Spaghetti",
        instructions:"Open Jar of Spaghetti sauce. Bring this to ",
        ingredients:["pasta","8 cups of Water","1 box Spaghetti"],
        img:"speggiti.jpeg"
    },{
      id:2,
        title:"Milk Shake",
        instructions:"Combine Ice Cream and Milk. Blend both of them.",
        ingredients:["2 scoops of Ice cream", "8 ounces of milk"],
        img:"milkshake.jpeg"
    },{
      id:3,
        title:"Avocado Toast",
        instructions:"Toast bread. Slice avacado and spread on bread ",
        ingredients:["@ slices of bread","1 avacado","1 toast"],
        img:"toast.jpeg"
    }
     ]
   }
 }
  render(){
  return (
    <div className="App">
      <Navbar />
      <RecipeInput />
      <RecipeList recipes={this.state.recipe}/>
    </div>
  );
}
}

export default RecipeApp;
