import axios from 'axios';
// TODO: Do one config point
import { apiPrefix } from '../../etc/config.json';

export default {

  updateItem(department, rating) {
    return axios({
      method: 'post',
      url: `${apiPrefix}/updateRate`,
      data: { department, rating },

    }).catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
  },

  sendComment(text, count, department){
    return axios({
      method: 'post',
      url: `${apiPrefix}/sendComment`,
      data: { department, count, text },

    }).catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
  }
};

