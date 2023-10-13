import React from 'react'
import { Switch, Route } from 'react-router'
import Login from './components/Login';
import Register from './components/Register';
import TweetMachine from './components/TweetMachine';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/tweetmachine" component={TweetMachine} />
        </Switch>
    );
};

export default Router;