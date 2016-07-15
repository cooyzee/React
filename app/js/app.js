import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './comment/commentBox';
import Welcome from './welcome';
import Comment from './comment/comment';
import {Router, Route, Link, browserHistory} from 'react-router';
import css from '../style/app.scss';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Welcome}>
            <Route path="list" component={CommentBox}/>
            <Route path="comment" component={Comment}/>
        </Route>
    </Router>,
    document.getElementById('content')
);

module.hot.accept();