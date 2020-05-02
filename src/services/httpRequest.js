import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000',
});

/**
 * Simulating the API delay
 * */
http.interceptors.response.use((response) => {
  const waitingTime = Math.random() * (1000 - 600) + 800;
  return new Promise((res) => {
    setTimeout(() => {
      res(response);
    }, waitingTime);
  });
});

export default http;
