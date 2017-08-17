import api from '../api';
import { department } from '../config/config';

export const sendUpdateRating = rating => ({
  type: 'UPDATE_RATING',
  rating,
});

const sendRating = (rating, text) => api.updateItem(department, rating, text);

export const updateRating = (rating, text) => function (dispatch) {
  return sendRating(rating, text).then(
            data => data,
        ).then(data => dispatch(sendUpdateRating(rating)),
        );
};

