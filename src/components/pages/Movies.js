import React, { Component } from 'react';
import Movie from './items/Movie';

export default class Movies extends Component {
    render(){
        console.log('in here');
        return(
            <div>
                <h1>Movies</h1>
                <Movie friend_name="John Doe" age="3"/>
            </div>
        );
    }
}