import React, { Component } from 'react';
import { Row, Col, SideNav, SideNavItem, Button } from 'react-materialize';
import './styles/Banner.css';

export default class Banner extends Component {
    render(){
        return(
            // <Navbar brand={<div><img src={this.props.pfp}/>Profile</div>} right>
            //     <NavItem><Button onClick={this.props.signOut}>sign out</Button></NavItem>
            // </Navbar>
            <Row className="blue-banner valign-wrapper">
                <Col s={2} m={1}>
                
                <SideNav
                    trigger={<i className="fa fa-bars fa-3x"></i>}
                    options={{ closeOnClick: true }}
                >
                <SideNavItem userView
                    user={{
                    background: 'img/office.jpg',
                    image: 'img/yuna.jpg',
                    name: 'John Doe',
                    email: 'jdandturk@gmail.com'
                    }}
                />
                <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
                <SideNavItem href='#!second'><Button onClick={this.props.signOut}>sign out</Button></SideNavItem>
                <SideNavItem divider />
                <SideNavItem subheader>Subheader</SideNavItem>
                <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
                </SideNav>
                </Col>
                <Col s={0}></Col>
                <Col s={8} m={9} className="center-align"><h4 className="blue-banner">with<span class="golden">ME</span></h4></Col>
                <Col s={0}></Col>
                <Col s={2} m={1}><img src={this.props.pfp}/></Col>
            </Row>
        );
    }
}