import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Icon } from 'react-materialize';

export default class Navbar extends Component {
    render(){
        return(
            <Tabs>
                <Tab title="movies" href="/movies"><Link to="movies"><Icon>camera_roll</Icon></Link></Tab>
                <Tab title="shows" active><Link to="shows"><Icon>tv</Icon></Link></Tab>
                <Tab title="books"><Link to="books"><Icon>book</Icon></Link></Tab>
                <Tab title="podcasts"><Link to="podcasts"><Icon>rss_feed</Icon></Link></Tab>
                <Tab title="news"><Link to="news"><Icon>sort</Icon></Link></Tab>
            </Tabs>
        );
    }
}