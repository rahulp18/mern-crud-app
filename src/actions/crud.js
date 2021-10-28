import * as api from '../api/index.js';

export const fetchPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePosts = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePosts(id, post);

    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deletePosts = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error);
  }
};
