import React from 'react';
import NavLink from './utility/NavLink';

export default class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="pop-stripe"></div>
                <ul role="nav">
                    <li><NavLink to="/list">comment list</NavLink></li>
                    <li><NavLink to="/comment">comment</NavLink></li>
                </ul>

                {this.props.children}
            </div>
        );
    }
}