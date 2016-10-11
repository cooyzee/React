import React from 'react';
import U from '../utility/Util';

export default class Other extends React.Component {
    /*
     * Initial state
     * Default props & prop type
     * props - short for properties,passed as attributes in JSX syntax.immutable within the component
     * */
    constructor() {
        super();
        this.state = {
            test: 'CaoZhiYi'
        }
    }

    /*
     * Invoke once, before the initial rendering occurs.
     * If you call setState within this method, render() will see the updated state and will be execute only once despite the state change.
     * */
    componentWillMount() {
        U.log('Will mount');
    }

    /*
     * Invoke once, immediately after the initial rendering occurs.
     * 1. Access any refs to you children
     * 2. Child's invoked before parent's
     * 3. Perform operations like: using timers, send AJAX requests, integrate with other JavaScript frameworks...
     * */
    componentDidMount() {
        U.log('Did mount');
    }

    /*
     * Invoked when a component is receiving new props.
     * Calling this.setState() within this method will not trigger an additional render.
     * One common mistake if for code executed during this lifecycle method to assume that props have changed.
     * */
    componentWillReceiveProps(nextProps) {
        //access the old props: this.props
        U.log('Will receive props');
    }

    /*
     * Invoked before rendering when new props or state are being received.
     * This method is not called for the initial render or when 'forceUpdate' is used.
     * Use this as an opportunity to return false when you're certain that the transition to the new props and state will not require a component update.
     * cWU and cDU will not be called.
     *  */
    // shouldComponentUpdate(nextProps, nextState) {
    //     // return nextProps.id !== this.props.id;
    //     U.log('Should update?');
    //     // return true;
    // }

    /*
     * Invoked immediately before rendering.
     * Use this as an opportunity to perform preparation before an update occurs.
     * You cannot use this.setState() in this method.
     * */
    componentWillUpdate() {
        U.log('Will update');
    }

    /*
     * Invoked immediately after rendering.
     * */
    componentDidUpdate() {
        U.log('Did update');
    }

    /*
     * Invoked immediately before a component is unmounted from the DOM.
     * Perform any necessary cleanup in this method, such as invalidating timers or cleaning up any DOM elements that were created in componentDidMount.
     * */
    componentWillUnmount() {
        U.log('Will unmount');
    }

    /*
     * Required
     * When called, it should examine this.props and this.state and return a single child element:
     * 1. <div />; 2. React.DOM.div(); 3. composite component that you've defined
     * can also return null or false to indicate that you don't want anything rendered.
     * Should Be Pure
     * Meaning that it does not modify component state.
     * */
    render() {
        U.log('Render()');
        let items = [
            {id:1,name:'Cooyzee'},
            {id:2,name:'Leo'},
            {id:3,name:'Nancy'}
        ];
        return (
            <div>
                {/*hi  */}
                <h1>There must be an Other Module.</h1>
                <h2>{this.state.test}</h2>
                <div /*hi*/ >{new Date().toDateString()}</div>
                <div>{'First &middot; Second'}</div>
                <div>{'First \u00b7 Second'}</div>
                <div>{['First ', <span key="middot">&middot;</span>, ' Second']}</div>
                <div dangerouslySetInnerHTML={{__html: '<script>alert("xxx")</script>'}} />
                <ol>
                    {items.map((x)=><li key={x.id}>x.name</li>)}
                </ol>
            </div>
        );
    }
}
