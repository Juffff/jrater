import React from 'react';
import Rater from 'react-rating';
import 'url-search-params';
import './RaterContainer.less';
import {updateItem} from '../api';
class RaterContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            rate: 0,
            showStars: true,
            showButtons: false,
            showThanks: false
        }
    }

    handleOnRaterChange(rate) {
        this.setState(
            {
                rate: rate,
                showButtons: true
            }
        );
    }

    handleOnCancelClick() {
        this.setState(
            {
                rate: 0,
                showButtons: false
            }
        );
    }

    handleOnSendClick() {
        this.sendRate(this.state.rate);
        this.setState(
            {
                rate: 0,
                showStars: false,
                showButtons: false,
                showThanks: true
            }
        );
    }

    sendRate(rate) {
        const search = this.props.location.search; // could be '?foo=bar'
        const params = new URLSearchParams(search);
        const department = params.get('department');
        updateItem(department, rate).then(data => console.log(data));
    }

    render() {
        return (
            <div className="RaterWrapper">
                <div className={`RaterContainer ${this.state.showStars ? 'visible' : 'invisible'}`}>
                    <h1 className="invite">Оцените,
                        пожалуйста, качество нашей работы</h1>
                    <br />
                    <div className="RateHolder">
                        <Rater
                            initialRate={this.state.rate}
                            empty={<img
                                src="images/emptyStar.png"
                                className="icon"
                                alt="empty"
                            />}
                            full={<img src="images/fullStar.png" className="icon"/>}
                            onChange={this.handleOnRaterChange.bind(this)}
                        />
                    </div>
                </div>

                <div className={`commentControls ${this.state.showButtons ? 'visible' : 'invisible'}`}>
                    <div className="cancelButton" onClick={this.handleOnCancelClick.bind(this)}>Cancel</div>
                    <div className="sendButton" onClick={this.handleOnSendClick.bind(this)}>OK</div>
                </div>

                <div className={`thanksHolder ${this.state.showThanks ? 'visible' : 'invisible'}`}>
                    <h1 className="thanksMessage">Спасибо, Ваш голос учтен!</h1>
                </div>
            </div>
        )
    }
}

export default RaterContainer;


/* constructor() {
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
 }*/