import React from 'react';
import Rater from 'react-rating';
import {connect} from 'react-redux';
import './RaterContainer.less';
import {updateRating, getDepartmentRate} from '../actions';

class RaterContainer extends React.Component {
    handleOnChange(rate){
        const rateItem = this.props.departmentRate[0];
        this.props.updateRating(rateItem._id, rate);
        this.props.getDepartmentRate(this.props.departmentRate[0].name);
    }

    render() {
        return (
            <div className="RaterContainer">
                {this.props.departmentRate[0] ? (
                    <div className="rateHolder">
                        <Rater initialRate={this.props.departmentRate[0].rate} onChange={this.handleOnChange.bind(this)}/>
                        <h2>{`Raters count = ${this.props.departmentRate[0].count}`}</h2>
                    </div>

                ) : '...'}
            </div>
        );
    }
}

export default connect(state => ({
    departmentRate: state.departmentRate
}), {updateRating, getDepartmentRate})(RaterContainer);