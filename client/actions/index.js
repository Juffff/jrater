import api from '../api';
import {department} from '../config/config';

/*const getAllRateItems = (data) => ({
    type: 'GET_ALL_RATE_ITEMS',
    data: data
});

const downloadAllItems = () => {
    return api.getAllItems();
};

export const getRateItemslist = () => {
    return function (dispatch) {
        return downloadAllItems().then(
            data => data.data
        ).then(data => dispatch(downloadedRateItemslist(data))
        )
    };
};*/

/*export const downloadedRateItemslist = (data) => ({
    type: 'GET_RATE_ITEMS_LIST',
    data: data
});*/

/*
export const rate = (value) => ({
    type: 'RATE',
    value: value
});
*/

/*
export const selectDepartment = (value) => ({
    type: 'SELECT_DEPARTMENT',
    department: value.value
});
*/

/*export const downloadedDepartmentRate = (department) => ({
    type: 'GET_DEPARTMENT_RATE',
    department: department
});

const downloadItem = (item) => {
    return api.getItem(item);
};

export const getDepartmentRate = (department) => {
    return function (dispatch) {
        return downloadItem(department).then(
            data => data.data
        ).then(data => dispatch(downloadedDepartmentRate(data))
        )
    };
};*/

export const sendUpdateRating = (rating) => ({
    type: 'UPDATE_RATING',
    rating: rating
});

const sendRating = (rating) => {
  return api.updateItem(department, rating);
};

export const updateRating = (rating) => {
    return function (dispatch) {
        return sendRating(rating).then(
            data => data
        ).then(data => dispatch(sendUpdateRating(rating))
        )
    };
};

