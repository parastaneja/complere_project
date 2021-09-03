import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StyleDrawer from '../components/StyleDrawer';
import BaseLayout from '../layouts/BaseLayout';
import Employ from '../pages/employ/Employ';

function PublicRoute() {
    return (
        <div>

            <BrowserRouter>
                <StyleDrawer />
                <Switch>
                    <BaseLayout>
                        <Route path={["/", "/employ"]} component={Employ} />
                    </BaseLayout>

                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default PublicRoute;