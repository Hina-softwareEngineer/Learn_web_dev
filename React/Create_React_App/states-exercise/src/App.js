import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const NUM_BOXES=32;

const Box=({color})=>{
  const style={
    width:'180px',
    height:'180px',
    display:'inline-block',
    backgroundColor:color
  }

  return <div style={style} />;
};

class App extends Component{

  constructor (props){
    super(props);
    const boxes=Array(NUM_BOXES).fill().map(this.getRandomColors,this)

    this.state={  boxes  };

    setInterval(()=>{
      const boxes=this.state.boxes.slice();
      const randIndex=Math.floor(Math.random()*boxes.length);
      boxes[randIndex]=this.getRandomColors();
      this.setState({boxes});
    },300);
  }
      // instructors:[
      //   {name:'Tim',
      // hobbies:['sailing','react']},{
      //   name:'Matt',
      //   hobbies:['math','d3']
      // },{
      //   name:'Colt',
      //   hobbies:['Css','hiking']
      // },{
      //   name:'Elie',
      //   hobbies:['music','es2015']
      // }
      // ]

    // };
    // setTimeout(()=>{
    //     const randInst=Math.floor(Math.random()*this.state.instructors.length);
    //     console.log(randInst,this.state.instructors.length);

    //     const hobbyIndex=Math.floor(Math.random()*this.state.instructors[randInst].length);
    //     console.log(hobbyIndex);
    //     const instructors=this.state.instructors.map((inst,i)=>{
    //       console.log(inst);
    //       if (i===randInst){
    //         const hobbies=[...inst.hobbies];
    //         console.log("hobbies:",hobbies);
    //         hobbies.splice(hobbyIndex,1);
    //         return {
    //           ...inst,hobbies
    //         };
    //       }
    //       return inst;
    //       // i===randInst ? {
    //       //   ...inst,
    //       //   hobbies:[...inst.hobbies.slice(0,hobbyIndex).concat(inst.hobbies.slice(hobbyIndex+1,inst.hobbies.length))]
    //       // }:inst
    //     });

    //     // const instructors=this.state.instructors.slice();
    //     // // instructors[randInst].hobbies.splice(hobbyIndex,1);
    //     // instructors[randInst]=Object.assign({},instructors[randInst]);
    //     // instructors[randInst].hobbies=instructors[randInst].hobbies.slice();
    //     // instructors[randInst].hobbies.splice(hobbyIndex,1);
    //     this.setState({instructors});
    // },5000);
  // }

  getRandomColors(){
    let colorIndex=Math.floor(Math.random()*this.props.allColors.length);
    return this.props.allColors[colorIndex];
  }

  render(){
    
    // const instructors=this.state.instructors.map((instructor,index)=>{
    //   return (
    //   <li key={index}>
    //     <h3>{instructor.name}</h3>
    // <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
    //   </li>
    //   );
    // });

    const boxes = this.state.boxes.map((color, index) => (
      <Box key={index} color={color} />
    ));
    return (
      <div className="App">
        {boxes}
      </div>
  );
}
}

App.defaultProps={
  allColors:["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
  "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
  "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
  "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
  "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
  "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
  "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
  "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
  "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
  "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
  "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
  "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
  "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
  "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
  "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
  "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
  "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
  "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
  "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
  "Yellow","YellowGreen"]
}

export default App;
