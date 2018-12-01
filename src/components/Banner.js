import React, { Component } from 'react';
import { Row, Col, SideNav, SideNavItem, Button, Input } from 'react-materialize';
import './styles/Banner.css';
import { Link } from 'react-router-dom';

export default class Banner extends Component {
    render(){
        return(
            // <Navbar brand={<div><img src={this.props.pfp}/>Profile</div>} right>
            //     <NavItem><Button onClick={this.props.signOut}>sign out</Button></NavItem>
            // </Navbar>
            <Row className="blue-banner valign-wrapper">
                <Col s={2} m={1}>
                
                <SideNav
                    trigger={<i className="fa fa-bars fa-2x"></i>}
                    options={{ closeOnClick: false }}
                >
                
                <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
                <SideNavItem divider />
        
                <SideNavItem subheader>Subscriptions</SideNavItem>
                <SideNavItem>Streaming</SideNavItem>
                <SideNavItem>Music</SideNavItem>
                <SideNavItem>EBooks</SideNavItem>
                <SideNavItem>
                <div className="w3-container w3-cell switch align-right"><span className="w3-cell align-left">Netflix<tab></tab></span><span className="w3-cell align-right"><label>Off<input type="checkbox"/><span className="lever"></span>On</label></span></div>
                </SideNavItem>
                <SideNavItem>Connect</SideNavItem>
                <SideNavItem>Privacy</SideNavItem>
                <SideNavItem footer><Button onClick={this.props.signOut}>Log out</Button></SideNavItem>
                </SideNav>
                </Col>
                <Col s={0}></Col>
                <Col s={8} m={9} className="center-align"><img className="withme" src={require("./withme.png")}/></Col>
                <Col s={0}></Col>
                <Col s={2} m={1}><Link to="profile"><img className="circle" src={this.props.pfp}/></Link></Col>
            </Row>
        );
    }
}