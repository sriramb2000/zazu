import React, { Component } from 'react';
import { Chip } from 'react-materialize';
import '../../styles/Movie.css';

export default class Movie extends Component {
    render(){
        return (
        <div class="cardd">
            <section class="movie_image">
                <img class="movie_poster" src="https://cdn.pbrd.co/images/5pKKTuTaq.jpg" alt="As Above So Below" />
            </section>

            <section class="center-align">
                <div class="about_movie">
                <div class="center-align movie_info">
                    <p>{this.props.friend_name} shared</p>
                </div>
                <h3>AS ABOVE SO BELOW</h3>
                
                <button class="watch"> 
                    Watch Now!
                </button>
                <button class="watchlist">
                    Add to watchlist!
                </button>
                {this.props.age} days ago
                </div>
            </section>

            <section class="purchase right-align">
                HENLO
            </section>
        </div>
        );


    }
}