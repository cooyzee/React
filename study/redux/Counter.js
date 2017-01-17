import React, {Component} from 'react';

class Counter extends Component{
    state = {value: 0};

    increment = () => {
        this.setState(prevState => ({
            value: prevState.value + 1
        }))
    };

    decrement = () => {
        this.setState(prevState => ({
            value: prevState.value - 1
        }))
    };
    
    render(){
        return (
            <div>
                {this.state.value}
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}