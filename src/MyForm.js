import React from 'react';

class MyForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearValue = this.clearValue.bind(this);
    }

    clearValue() {
        this.setState({value: ''})
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        alert(this.state.value);
        this.clearValue();
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> 請輸入: </label>
                <textarea value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="送出" />
                <div>目前輸入: {this.state.value}</div>
            </form>
        );
    }
}

export default MyForm;