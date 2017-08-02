import axios from 'axios';
// TODO: Do one config point
import {apiPrefix} from '../../etc/config.json';

export default {
    getAllItems() {
        return axios.get(`${apiPrefix}/items`);
    },

    getItem(item){
        return axios({
            method: 'post',
            url: `${apiPrefix}/getRate`,
            data: item

        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
    },

    updateItem(id, rating){
        return axios({
            method: 'post',
            url: `${apiPrefix}/updateRate`,
            data: {id: id, rating: rating}

        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
    }
};


