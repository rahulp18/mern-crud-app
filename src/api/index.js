import axios from 'axios';

const API = axios.create({ baseURL: 'https://crud-app-rahul.herokuapp.com' });

export const fetchUsers = () => API.get('/user');
export const createPost = (newPost) => API.post('/user', newPost);
export const deletePost = (id) => API.delete(`/user/${id}`);
export const updatePosts = (id, updateData) =>
  API.patch(`/user/${id}`, updateData);
