import React, { Component } from 'react';
import { Navbar } from 'react-materialize'

export default class Banner extends Component {
    render(){
        return(
            <Navbar brand='zazu' right/>
        );
    }
}