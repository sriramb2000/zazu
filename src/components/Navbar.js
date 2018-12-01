import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col , Icon } from 'react-materialize';
import './styles/Navbar.css';

export default class Navbar extends Component {
    render(){
        return(
        <div className="center-align">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet"/>
            <Row>            
                <Col s={2}><Link to="shows" className="center-align"><i className="fa fa-tv fa-lg"></i></Link></Col>
                <Col s={2}><Link to="movies" className="center-align"><i className="fa fa-film fa-lg"></i></Link></Col>
                <Col s={2}><Link to="books" className="center-align"><i className="fa fa-book fa-lg"></i></Link></Col>
                <Col s={2}><Link to="podcasts" className="center-align"><i className="fa fa-podcast fa-lg"></i></Link></Col>
                <Col s={2}><Link to="news" className="center-align"><i className="fa fa-link fa-lg"></i></Link></Col>
                <Col s={2}><Link to="music" className="center-align"><i className="fa fa-music fa-lg"></i></Link></Col>
            </Row>
        </div>
            
        );
    }
}