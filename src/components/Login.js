import React, { Component } from 'react';
import firebase from "../firebaseConfig"; 
import withFirebaseAuth from "react-auth-firebase";
import Home from './Home';
import FacebookLogin from './FacebookLogin';

class Login extends Component {
  render() {
    const {
      signInWithFacebook,
      signOut,
      user,
      error 
    } = this.props;

    if(user){
      return(
        <Home signOut={signOut} user={user}/>
      );
    }
    return (
      <FacebookLogin signIn={signInWithFacebook}/>
    );
  }
  
}

const authConfig = {
  facebook: {
    // redirect: true, // Opens a pop up by default
    returnAccessToken: true, // Returns an access token as googleAccessToken prop
    saveUserInDatabase: true, // Saves user in database at /users ref
    scopes: ["user_friends","email"]
  }
};

export default withFirebaseAuth(Login, firebase, authConfig);
