import axios from 'axios';
// TODO: Do one config point
import {apiPrefix} from '../../etc/config.json';

export default {

    updateItem(department, rating, text){
        console.log(rating);
        return axios({
            method: 'post',
            url: `${apiPrefix}/updateRate`,
            data: {department: department, rating: rating, text: text}

        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
    }
};


