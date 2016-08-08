import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App } from '../../ui/layouts/app.jsx';
import Index from '../../ui/components/index.jsx';
import { NotFound } from '../../ui/components/NotFound.jsx';
import Admin from '../../ui/components/admin/Admin.jsx'
import {GuestsComp} from '../../ui/composers/GuestsComp.jsx'

Meteor.startup(()=> {
    render (
        <Router history={browserHistory} >
            <Route path="/" component={App} >
                <IndexRoute component={ Index } />
    			<Route path="admin" component = {Admin} />
                <Route path="gueststat" component = {GuestsComp} />
            </Route>
            <Route path="*" component={NotFound} />
        </Router>,
        document.getElementById( 'react-root' )
    )
});
