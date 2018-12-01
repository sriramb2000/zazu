import React, { Component } from 'react';
import { Row, Col, SideNav, SideNavItem, Button, Input } from 'react-materialize';
import ReactDOM from 'react-dom';
import './styles/Banner.css';
import { Link } from 'react-router-dom';

export default class Banner extends Component {
    constructor(props) {
        super(props);
        this.sideNav = React.createRef();
        
    }

    openNav() {
        console.log(this.sideNav);
        this.sideNav.current.style.width = "250px";
    }

    closeNav() {
        
        this.sideNav.current.style.width = "0px";
    }

    render(){
        
        

        return(
            // <Navbar brand={<div><img src={this.props.pfp}/>Profile</div>} right>
            //     <NavItem><Button onClick={this.props.signOut}>sign out</Button></NavItem>
            // </Navbar>
            <Row className="blue-banner valign-wrapper">
                <Col s={2} m={1}>
                <span onClick={this.openNav.bind(this)}><i className="fa fa-bars fa-2x"></i></span>
                <div id="sidenav" ref={this.sideNav}>
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav.bind(this)}>&times;</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                    <Button onClick={this.props.signOut}>Log out</Button>
                </div>
                </Col>
                <Col s={8} m={9} className="center-align"><img className="withme" src={require("./withme.png")}/></Col>
                <Col s={2} m={1}><Link to="profile"><img className="circle" src={this.props.pfp}/></Link></Col>
            </Row>
        );
    }
}