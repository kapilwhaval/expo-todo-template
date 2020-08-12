import axios from 'axios';
import constants from '../util/constants';

export const request = (method, url, params) => {
    const baseURL = constants.api.baseUrl;
    return axios({ method: method, url: `${baseURL}${url}`, params })
        .then((res) => { return res })
        .catch((err) => { throw err });
}

export const login = ({ credentials }) => {
    return request('get', constants.api.login)
        .then((res) => {
            res.data.profilePic = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            res.data.token = 'aslkdaskjhgsdkljh4ekljsdlkjhasd';
            return res.data;
        })
        .catch((err) => { throw err })
}