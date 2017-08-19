import api from '../api';
import {department} from '../config/config';

export const sendUpdateRating = count => ({
    type: 'UPDATE_RATING',
    count,
});

const sendRating = (rating) => api.updateItem(department, rating);

export const updateRating = (rating) => function (dispatch) {
    return sendRating(rating).then(data => data.data).then(data => {
        dispatch(sendUpdateRating(data));
    });
};

export const sendComment = (text, count) => dispatch => {
    api.sendComment(text, count, department).then(data => dispatch({
        type: 'SEND_COMMENT',
        data: data
    }));

};