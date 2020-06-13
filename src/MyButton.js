import React from 'react';

class MyButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    /**
     * or use without bind: 
        reset = () => {
            this.setState({counter: 0});
        }
     */
    reset() {
        this.setState({counter: 0});
    }

    /**
     * or use without bind: 
        increment = () => {
            this.setState({
                counter: this.state.counter + 1
            });
        }
     */
    increment() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    decrement() {
        this.setState({
            counter: Math.max(this.state.counter - 1, 0)
        });
    }

    render() {
        return  (
            <div>
                <p>Count: {this.state.counter}</p>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.reset}>0</button>
            </div>
        );
    }
}

export default MyButton;