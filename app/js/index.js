import React from 'react';
import NavLink from './utility/NavLink';

export default class Welcome extends React.Component {
    render() {
        return (
            <div>
                <div className="pop-stripe"></div>
                <div className="navigation">
                    <div className="container">
                        <div className="logo"><a href="#/" role="nav">Cooyzee</a></div>
                        <ul className="nav" role="nav">
                            <li><NavLink to="/list">Comment List</NavLink></li>
                            <li><NavLink to="/comment">Comment</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}