import React from 'react';

const YOU_SELECT = '您選擇了 ';
const NOTHING_SELECT = '未選擇';

class MySelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            showValue: NOTHING_SELECT
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var index = event.nativeEvent.target.selectedIndex;
        var targetValue = event.target.value;
        var targetText = YOU_SELECT + event.target[index].text;
        
        if (targetValue == '') {
            targetText = NOTHING_SELECT;
        }

        this.setState({
            value: targetValue,
            showValue: targetText
        });
    }

    render() {
        return (
            <div>
                <label>
                    選擇:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value=''>無</option>
                        <option value='apple'>蘋果</option>
                        <option value='orange'>橙子</option>
                        <option value='banana'>香蕉</option>
                        <option value='mango'>芒果</option>
                    </select>
                    {this.state.showValue}
                </label>
            </div>
        );
    }
}

export default MySelect;