import React, { Component } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import {Content} from './Content';

export default class Home extends Component { 
    render(){
        return(
            <div>
                <Banner/>
                <div className="container">
                    <Navbar/>
                    <Content/>
                    <button onClick={this.props.signOut}>Sign Out</button>
                </div>
            </div>
        );
    }
}
