import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Movies from './pages/Movies';
import Shows from './pages/Shows';
import Books from './pages/Books';
import Podcasts from './pages/Podcasts';
import News from './pages/News';

export const Content = () => (
    <content>
        <Switch>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/shows" component={Shows}></Route>
            <Route path="/podcasts" component={Podcasts}></Route>
            <Route path="/books" component={Books}></Route>
            <Route path="/news" component={News}></Route>
        </Switch>
    </content>
)