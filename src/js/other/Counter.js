import React, {Component} from 'react';

export default class Counter extends Component{
    constructor(){
        super();
        this.state = {value: 0};
    }

    increment () {
        this.setState(prevState => ({
            value: prevState.value + 1
        }))
    };

    // value yo be ahead run down the infrastructure
    decrement () {
        this.setState(prevState => ({
            value: prevState.value - 1
        }))
    };
    
    render(){
        return (
            <div>
                <h1>{this.state.value}</h1>
                <button className="cBtn text-blue" onClick={()=>this.increment()}>+</button>
                <button className="cBtn text-blue" onClick={()=>this.decrement()}>-</button>
            </div>
        )
    }
}