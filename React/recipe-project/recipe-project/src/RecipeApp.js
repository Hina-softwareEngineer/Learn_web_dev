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
     ],nextRecipeId : 3,
     showForm:false,
   }
   this.handleSave = this.handleSave.bind(this);
   this.onDelete = this.onDelete.bind(this);
 }

 handleSave(recipe) {
  this.setState((prevState, props) => {
    const newRecipe = {...recipe, id: this.state.nextRecipeId};
    return {
      nextRecipeId: prevState.nextRecipeId + 1,
      recipes: [...this.state.recipes, newRecipe],
      showForm: false
    }
  });
}

onDelete(id) {
  const recipes = this.state.recipes.filter(r => r.id !== id);
  this.setState({recipes});
}

render(){
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({showForm: true})} />
        { showForm ?
            <RecipeInput 
              onSave={this.handleSave}
              onClose={() => this.setState({showForm: false})}  
            /> :
            null }
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes} />
      </div>
    );
}
}

export default RecipeApp;
