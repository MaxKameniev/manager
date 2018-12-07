import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Tracking from '../Tracking/Tracking';
import Tasklist from '../Tasklist/Tasklist';
import Orders from '../Orders/Orders';

const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Orders} />
                <Route path='/tracking' component={Tracking} />
                <Route path='/tasks' component={Tasklist} />
            </Switch>
        </div>
    );
};

export default Main;