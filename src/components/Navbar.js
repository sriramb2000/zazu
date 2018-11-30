import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col , Icon } from 'react-materialize';
import './styles/Navbar.css';

export default class Navbar extends Component {
    render(){
        return(
        <div>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet"/>
            <Row>
                <Col s={1} m={2}></Col>                
                <Col s={2}><Link to="shows" className="center-align"><Icon>tv</Icon></Link></Col>
                <Col s={2}><Link to="movies" className="center-align"><Icon>camera_roll</Icon></Link></Col>
                <Col s={2}><Link to="books" className="center-align"><Icon>book</Icon></Link></Col>
                <Col s={2}><Link to="podcasts" className="center-align"><Icon>rss_feed</Icon></Link></Col>
                <Col s={2}><Link to="news" className="center-align"><Icon>sort</Icon></Link></Col>
                <Col s={1}></Col>
            </Row>
        </div>
            
        );
    }
}