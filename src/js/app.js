import React from 'react';
import ReactDOM from 'react-dom';
import Index from './Index';
import {Comment, CommentBox, CommentDetail} from './comment/Comment';
import Other from './other/Other';
import {Router, Route, Redirect, IndexRedirect, IndexRoute, hashHistory, browserHistory} from 'react-router';
import css from '../style/app.scss';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Index}>
            <IndexRedirect to="/list"/>
            <Route path="/list" component={Comment}>
                <IndexRoute component={CommentBox}/>
                <Route path="/list/:id" component={CommentDetail}/>
            </Route>
            <Route path="/other" component={Other}/>
            <Redirect from="/*" to="/list" />
        </Route>
    </Router>,
    document.getElementById('content')
);

// module.hot.accept();