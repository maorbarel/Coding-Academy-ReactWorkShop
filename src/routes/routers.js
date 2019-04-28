import React from 'react';
import { HashRouter, Route, Switch, } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import ContactPage from '../pages/ContactPage';
import ContactDetailsPage from '../pages/ContactDetailsPage'
import StatisticPage from '../pages/StatisticPage'

const Router = (props) => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/statistic" component={StatisticPage} />
                <Route exact path="/contact" component={ContactPage} />
                <Route exact path="/contact/:id" component={ContactDetailsPage} />
            </Switch>
        </HashRouter>
    )
}
export default Router;