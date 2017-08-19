import React from 'react';
import Rater from 'react-rating';
import {connect} from 'react-redux';
import './RaterContainer.less';
import {updateRating, sendComment} from '../actions';

class RaterContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            rate: 0,
            rotate: false,
            commentVisibility: false,
            text: '',
            rateClicked: false,
        };
    }

    handleOnChange(rate) {

        this.setState(Object.assign(this.state, {rate}));
        this.props.updateRating(this.state.rate);
        this.setState({commentVisibility: !this.state.commentVisibility});
    }

    handlerOnSendClick() {
        this.props.sendComment(this.state.text, this.props.rater.count);
        this.clear('send');
    }

    clear(btn) {
        if(btn === 'send'){
        this.setState({rotate: !this.state.rotate});
        setTimeout(() => {
            this.setState(Object.assign(this.state, {
                commentVisibility: !this.state.commentVisibility,
                text: '',
                rate: 0,
                rotate: !this.state.rotate
            }));

            clearTimeout(this);
        }, 5000);} else {
            this.setState(Object.assign(this.state, {
                commentVisibility: !this.state.commentVisibility,
                text: '',
                rate: 0,
            }));
        }


    }

    handlerOnCancelClick() {
        this.clear();
    }

    handleOnTextChange(e) {
        this.setState(Object.assign(this.state, {text: e.target.value}));
    }


    render() {
        return (
            <div className="RaterWrapper">
                <div className={`RaterContainer ${this.state.rotate ? 'rotate' : 'noRotate'}`}>

                    <h1 className={`invite ${this.state.commentVisibility ? 'invisible' : 'visible'}`}>Оцените,
                        пожалуйста, качество нашей работы</h1>
                    <br />
                    <div className={`RateHolder ${this.state.commentVisibility ? 'invisible' : 'visible'}`}>
                        <Rater
                            empty={<img
                                src="images/emptyStar.png"
                                className="icon"
                                alt="empty"
                            />}
                            full={<img src="images/fullStar.png" className="icon"/>}
                            onChange={this.handleOnChange.bind(this)}
                            alt="full"
                        />
                    </div>
                    <div className={`comment ${this.state.commentVisibility ? 'visible' : 'invisible'}`}>
                        <h2>Оставьте Ваш комментарий</h2>
                        <input
                            type="text"
                            className="text"
                            value={this.state.text}
                            onChange={this.handleOnTextChange.bind(this)}
                        />
                        <div className="commentControls">
                            <div
                                className="cancelButton"
                                onClick={this.handlerOnCancelClick.bind(this)}>Отмена
                            </div>
                            <div
                                className="sendButton"
                                onClick={this.handlerOnSendClick.bind(this)}>Отправить
                            </div>
                        </div>
                    </div>

                </div>

                <div className={`thanksHolder ${this.state.rotate ? 'noRotate' : 'rotate'}`}>
                    <h1 className="thanksMessage">Спасибо, Ваш голос учтен!</h1>
                </div>
            </div>
        );
    }
}

export default connect(state => ({rater: state.rater}), {updateRating, sendComment})(RaterContainer);
