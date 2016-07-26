import React from 'react';
import CommentBox from './CommentBox';
import CommentDetail from './CommentDetail';

class Comment extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export { Comment, CommentBox, CommentDetail }