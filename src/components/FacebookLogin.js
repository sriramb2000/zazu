import React, { Component } from 'react';
import './styles/FacebookLoginMain.css';
import './styles/FacebookLoginUtil.css';


export default class FacebookLogin extends Component {
    render(){
        return(
            <div className="container-login100">
                <div className="wrap-login100 p-l-55 p-r-55 p-t-45">
                    <div className="login100-form validate-form">
                        <span className="login100-form-title p-b-34">
                           <img src={require('./withme.png')}/>
                        </span>

                        <div className="wrap-input100 validate-input m-b-20" data-validate="Enter username or email">
                            <input className="input100" type="text" name="username" placeholder="username or email"/>
                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 validate-input m-b-25" data-validate = "Enter password">
                            <input className="input100" type="password" name="pass" placeholder="password"/>
                            <span className="focus-input100"></span>
                        </div>

                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">
                                Sign In
                            </button>
                        </div>

                        <div className="text-center p-t-40 p-b-20">
                            <p className="txt3">Not a member? <a className="txt3" href="#">Sign Up</a></p>
                            <span className="txt3">
                                Or login with
                            </span>
                        </div>

                        <div className="flex-c p-b-50">
                            <button onClick={this.props.signIn} className="login100-social-item">
                                <i id="blue-icon" className="fa fa-facebook-f"></i>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}