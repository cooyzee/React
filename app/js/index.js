import React from 'react';
import NavLink from './utility/NavLink';

// if need home
// <NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink>

export default class Welcome extends React.Component {
    render() {
        return (
            <div>
                <div className="pop-stripe"></div>
                <div className="navigation">
                    <div className="container">
                        <div className="logo"><a href="#/list" role="nav">Cooyzee</a></div>
                        <ul className="nav" role="nav">
                            <li><NavLink to="/list">Comment List</NavLink></li>
                            <li><NavLink to="/other">Other</NavLink></li>
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