import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import Employ from '../pages/employ/Employ';

function PublicRoute() {
    return (
        <div>
            <AppHeader />
            <BrowserRouter>
                <Switch>
                    <Route path={["/", "/employ"]} component={Employ} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default PublicRoute;