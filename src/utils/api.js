
import axios from 'axios';
import Store from '../models/Store.js';

const api = axios.create({
  baseURL: 'http://linux5.csie.ntu.edu.tw:8888',
});

function signUp(data) {
  return api.post('auth/store/signup', data).then(res => new Store(res.data));
}

function signIn(data) {
  return api.post('auth/store/login', data).then(res => res.data);
}

function getProfile(token) {
  return api.get('auth/store/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    console.log(res);
    return new Store(res.data);
  });
}

export const everything = {
  signUp,
  signIn,
  getProfile,
}

export default everything;