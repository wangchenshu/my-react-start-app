import React from 'react';

const ALREADY_STR = '已';
const SUBMIT_STR = '送出';
const CLEAR_STR = '清除';

class MyForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.clearValue = this.clearValue.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        alert(ALREADY_STR + SUBMIT_STR);
        this.clearValue();
        event.preventDefault();
    }

    handleClear() {
        this.clearValue();
    }

    clearValue() {
        this.setState({value: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> 請輸入: </label>
                <textarea value={this.state.value} onChange={this.handleChange} />
                <input type='submit' value={SUBMIT_STR} />
                <input type='button' onClick={this.handleClear} value={CLEAR_STR} />
                <div>目前輸入: {this.state.value}</div>
            </form>
        );
    }
}

export default MyForm;