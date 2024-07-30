import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/api/';

export const SACH_SERVICE= `sach-service/`
export const SACH_MANAGE_SERVICE= `quan-ly-sach-service/`
export const AUTHENCATION_SERVICE= `authentication-service/`


const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'X-Custom-Header': 'foobar',
    }
  });
api.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token'); //ví dụ token
      if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
  },
  error => {
      return Promise.reject(error);
  }
)


export default api;