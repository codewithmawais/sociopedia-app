import axios from "axios";

export const makeRequest = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    withCredentials: true,
    crossdomain: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
});