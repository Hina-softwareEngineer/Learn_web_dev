// import React from "react";
// import {Switch, Route, withRouter, Redirect} from "react-router-dom";
// import Homepage from "../components/Homepage";
// import { connect } from "react-redux";
// import AuthForm from "../components/Authform";
// import {authUser} from "../store/actions/auth";


// const Main=(props)=>{
//     const {authUser}= props;
//     return (
//     <div className="container">
//         <Switch>
//             <Route exact path="/" render={props=> <Homepage {...props} />}></Route>
//             <Route exact path="/signin" render={props=>{
//                     return (<AuthForm onAuth={authUser} buttonText="Log in" heading="Welcome Back." {...props} />
//                     );
//                 }} /> 

//     <Route exact 
//     path="/signup"
//     render={props=> {
//         return (<AuthForm onAuth={authUser}
//             signUp buttonText="Sign me Up!" heading="Join Warbler Today!" {...props} />
//                     );
//     }} />
//     </Switch>
//     </div>
//     );
// }

// function mapStateToProps(state){
//     return {
//         currentUser: state.currentUser
//     };
// }

// export default withRouter(connect(mapStateToProps, {authUser})(Main));


import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth";
import {removeError} from "../store/actions/error";

const Main = props => {
  const { authUser , errors , removeError , currentUser} = props;
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" render={props => <Homepage currentUser={currentUser} {...props} />} />
        <Route
          exact
          path="/signin"
          render={props => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                buttonText="Log in"
                heading="Welcome Back."
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/signup"
          render={props => {
            return (
              <AuthForm
              removeError={removeError}
                errors={errors}
                onAuth={authUser}
                signUp
                buttonText="Sign me up!"
                heading="Join Warbler today."
                {...props}
              />
            );
          }}
        />
      </Switch>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentUser:state.currentUser,
    errors: state.errors
  };
}

export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));