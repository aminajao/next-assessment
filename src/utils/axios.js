import axios from 'axios';

const options = {
  baseURL:
    process.env.BASE_URL ||
    'https://my-json-server.typicode.com/carry1stdeveloper/mock-product-api/',
  headers: {
    Accept: 'application/json,text/plain,*/*',
    'Content-Type': 'application/json',
  },
};

axios.defaults.timeout = 5000; // Set default timeout to 5 seconds

export const request = axios.create(options);

request?.interceptors.response.use(
  (response) => {
    // Modify response data before passing it to the calling function
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
