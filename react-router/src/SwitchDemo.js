import React from 'react';
import {Switch, Route} from 'react-router-dom';

const Homepage=({match})=>(
<div>HOMEPAGE,{match.params.id}</div>
);

const About=()=>(
    <div>ABOUT</div>
);

const SwitchDemo=()=>(
    <Switch>
        <Route exact path="/:id" component={Homepage} /> 
        <Route exact path="/about" component={About} />
    </Switch>
);

export default SwitchDemo;