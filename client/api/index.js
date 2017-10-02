import axios from 'axios';

import {apiPrefix} from '../config/config.json';

export const updateItem = (department, rating) => {
    return axios({
        method: 'post',
        url: `${apiPrefix}/rate`,
        data: {department, rating},

    }).catch((error) => {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    });
};


