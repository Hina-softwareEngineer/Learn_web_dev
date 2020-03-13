import React,{Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component{
    static defaultProps={
        recipes:[{
            title:"Spaghetti",
            instructions:"Open Jar of Spaghetti sauce. Bring this to ",
            ingredients:["pasta","8 cups of Water","1 box Spaghetti"],
            img:"speggiti.jpeg"
        },{
            title:"Milk Shake",
            instructions:"Combine Ice Cream and Milk. Blend both of them.",
            ingredients:["2 scoops of Ice cream", "8 ounces of milk"],
            img:"milkshake.jpeg"
        },{
            title:"Avocado Toast",
            instructions:"Toast bread. Slice avacado and spread on bread ",
            ingredients:["@ slices of bread","1 avacado","1 toast"],
            img:"toast.jpeg"
        }]
    }
    static propTypes={
        recipes:PropTypes.arrayOf(PropTypes.object).isRequired
    }
    render(){
        const recipes=this.props.recipes.map((r,index)=>
        (
            <Recipe key={index} {...r} />
        ));

        return (
            <div className="recipe-list ">
                {recipes}
            </div>
        );
    }
}

export default RecipeList;