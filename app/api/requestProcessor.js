import { baseURL } from './config';
import axios from 'axios';
axios.defaults.headers["Accept"] = "application/json";
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
axios.defaults.baseURL = baseURL();

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error) {
        // let config = error.config;
        if (error.response) {
         
        } else {
            //return internet connection errors;
            return Promise.reject(error);
        }
    }
});
class processRequest {
    sendGet(url) {
        return axios.get(url);
    }
    sendPost(url, payload = {}) {
        return axios.post(url, payload);
    }
    async sendFormData(url, payload = {}) {
        return axios({
            url: url,
            method: 'POST',
            data: payload,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        });
    };
    sendPut(url, payload) {
        return axios.put(url, payload);
    }

    sendDelete(url, payload) {
        return axios.delete(url, payload);
    }

    sendPatch(url, payload) {
        return axios.patch(url, payload);
    }
}
export default new processRequest(); 