import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getTopUsers = () => API.get('/top-users');
export const getTrendingPosts = () => API.get('/trending-posts');
export const getFeedPosts = () => API.get('/feed');