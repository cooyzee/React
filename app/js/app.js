import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './comment/commentBox';
import Welcome from './index';
import Comment from './comment/comment';
import {Router, Route, hashHistory} from 'react-router';0
import css from '../style/app.scss';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Welcome}>
            <Route path="/list" component={CommentBox}/>
            <Route path="/comment" component={Comment}/>
        </Route>
    </Router>,
    document.getElementById('content')
);

// module.hot.accept();