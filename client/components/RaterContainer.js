import React from 'react';
import Rater from 'react-rating';
import {connect} from 'react-redux';
import './RaterContainer.less';
import {updateRating} from '../actions';

class RaterContainer extends React.Component {
    handleOnChange(rate){
     /*   const rateItem = this.props.departmentRate[0];*/
        this.props.updateRating(rate);
        window.location = 'http://localhost:8080/thnk';
       /* this.props.getDepartmentRate(this.props.departmentRate[0].name);
        this.props.selectDepartment({value: "Secretary"});
        this.props.getDepartmentRate({value: "Secretary"});*/
    }

    render() {
        return (
            <div className="RaterContainer">
                <div className="rateHolder">
                    <Rater
                        empty={<img src="
                        emptyStar.png" className="icon" />}
                        full={<img src="fullStar.png" className="icon" />}
                        initialRate={0} onChange={this.handleOnChange.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default connect(state => ({
}), {updateRating})(RaterContainer);