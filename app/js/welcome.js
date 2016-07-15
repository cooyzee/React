import React from 'react';
import { Link } from 'react-router';

export default class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/list" activeStyle={{ color: 'red' }}>comment list</Link></li>
                    <li><Link to="/comment" activeStyle={{ color: 'red' }}>comment</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}