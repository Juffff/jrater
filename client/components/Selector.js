import React from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {getRateItemslist, selectDepartment, getDepartmentRate} from '../actions';

import './Selector.less';

class Selector extends React.Component {

    constructor(){
        super();
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(val){
        this.props.selectDepartment(val);
        this.props.getDepartmentRate(val);

    }

    componentWillMount() {
        this.props.getRateItemslist();
    }

    render() {
        const {selector} = this.props;
        const options = Object.values(selector).map(el =>
            ({value: el.name, label: el.name})
        );
        return (
            <div className="Selector">
                <h2>Select department</h2>
                <Select
                    placeholder="Select departmant"
                    name="form-field-name"
                    value={this.props.department}
                    options={options}
                    onChange={this.handleOnChange}
                />
            </div>
        );
    }
}

export default connect(state => ({
    selector: state.selector,
    department: state.department

}), {getRateItemslist, selectDepartment, getDepartmentRate})(Selector);