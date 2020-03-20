import React,{Component} from 'react';
import SwitchDemo from './SwitchDemo';
import './App.css';
import { NavLink, Router } from 'react-router-dom';

class App extends Component{
  render(){
    const active={textDecoration:'none',
  cursor:'default', color:'grey'};
  const defaultStyle={
    margin: '5px'
  }
  return (
    <Router>
    <div className="App">
      <NavLink exact style={defaultStyle} activeStyle={active} to="/">HOME</NavLink>
      <NavLink exact style={defaultStyle} activeStyle={active} to="/about">ABOUT</NavLink>
      <div style={{fontSize:'3em', margin:'25px'}}>
      <SwitchDemo />
       </div>
    </div>
    </Router>
  );
}
}

export default App;
