import React from 'react';
import ListItem from './ListItem';

class NumberList extends React.Component {
    render() {
        const listItems = this.props.numbers.map((item, key) =>
            <ListItem key={key} value={item} />
        );

        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

export default NumberList;