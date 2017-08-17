import React from 'react';
import Rater from 'react-rating';
import {connect} from 'react-redux';
import './RaterContainer.less';
import {updateRating} from '../actions';

class RaterContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            rate: 0,
            rotate: false,
            commentVisibility: false,
            text: '',
            rateClicked: false,
            pseudoRate: 0
        };
    }

    handleOnChange(rate) {
        this.setState({rate: rate});
        this.setState({commentVisibility: !this.state.commentVisibility});
        this.setState({pseudoRate: rate});
    }

    handlerOnSendClick(){
        this.props.updateRating(this.state.rate, this.state.text);
        this.setState({rotate: !this.state.rotate});
        setTimeout(() => {
            this.setState({commentVisibility: !this.state.commentVisibility});
            this.setState({rotate: !this.state.rotate});
            this.setState(Object.assign(this.state, {text: ''}));
            this.setState({rate: 0, pseudoRate: 0});

        }, 5000)
    }

    handleOnTextChange(e) {
        this.setState(Object.assign(this.state, {text: e.target.value}));
    }


    render() {
        return (
            <div className="RaterWrapper">
                <div className={`RaterContainer ${this.state.rotate ? 'rotate' : 'noRotate'}`}>
                    <br />
                    <h1>Пожалуйста, оцените качество нашей работы</h1>
                    <h2>Поставьте оценку</h2>
                    <div className="RateHolder">
                        <Rater
                            empty={<img
                                src="images/emptyStar.png" className="icon"/>}
                            full={<img src="images/fullStar.png" className="icon"/>}
                            initialRate={this.state.pseudoRate}
                            onChange={this.handleOnChange.bind(this)}
                        />
                    </div>
                    <div className={`comment ${this.state.commentVisibility ? 'commentVisible' : 'commentInvisible'}`}>
                        <h2>Оставьте Ваш комментарий</h2>
                        <input type="text" className="text" value={this.state.text}
                               onChange={this.handleOnTextChange.bind(this)}/>
                        <div className="sendButton"
                             onClick={this.handlerOnSendClick.bind(this)}
                        >Отправить</div>
                    </div>

                </div>

                <div className={`thanksHolder ${this.state.rotate ? 'noRotate' : 'rotate'}`}>
                    <h1 className="thanksMessage">Спасибо, Ваш голос учтен!</h1>
                </div>
            </div>
        );
    }
}

export default connect(state => ({}), {updateRating})(RaterContainer);