import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Tracking from '../Tracking';

export const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Tracking} />
            </Switch>
        </div>
    );
};