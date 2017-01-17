import React from 'react';

export default class CommentDetail extends React.Component {
    render() {
        return (<h4>There must be a comment from id={this.props.params.id}!</h4>);
    }
}