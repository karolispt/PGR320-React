import { ADD_GROCERY, DELETE_GROCERY, FETCH_GROCERY } from './types';
import axios from 'axios';

const APIurl = 'https://localhost:5001/inventory';


export const createPost = ({ name, description }) => {
  return (dispatch) => {
    return axios.post(`${APIurl}`, {name, description})
      .then(response => {
        dispatch(createPostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const updatePost = ({ name, description }) => {
  return (dispatch) => {
    return axios.put(`${APIurl}/inventory`, {name, description})
      .then(response => {
        dispatch(createPostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};


export const createPostSuccess = (data) => {
  return {
    type: ADD_GROCERY,
    payload: {
      name: data.name,
      description: data.description,
      id: data.id
    }
  }
};

export const deletePostSuccess = id => {
  return {
    type: DELETE_GROCERY,
    payload: {
      id
    }
  }
}

export const deletePost = id => {
  return (dispatch) => {
    return axios.delete(`${APIurl}/${id}`)
      .then(response => {
        dispatch(deletePostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchPosts = (posts) => {
  return {
    type: FETCH_GROCERY,
    posts
  }
};

export const fetchAll = () => {
  return (dispatch) => {
    return axios.get(APIurl)
      .then(response => {
        dispatch(fetchPosts(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};