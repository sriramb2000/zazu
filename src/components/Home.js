import React, { Component } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import {Content} from './Content';
import './styles/Home.css';

export default class Home extends Component { 
    render(){
        return(
            <div className="yellow-bg">
                <div className="sticky white-back">
                    <Banner signOut={this.props.signOut} pfp={this.props.user.photoURL}/>
                    <Navbar/>
                </div>
                
                <div className="container center-align content-topper">
                    <Content/>
                </div>
            </div>
        );
    }
}
