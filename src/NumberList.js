import React from 'react';

const NUMBER = [1, 2, 3, 4, 5];
const LIST_ITEMS = NUMBER.map((item, key) =>
    <li key={key}>{item}</li>
);

class NumberList extends React.Component {

    constructor(props) {
        console.log(props);
        super(props);
        this.state = {}
    }

    render() {
        return (
            <ul>{LIST_ITEMS}</ul>
        );
    }
}

export default NumberList;