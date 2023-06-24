import axios from "axios";

export const getAllComment = (inputId) => {
  return axios.get(`http://localhost:8081/api/comments?id=${inputId}`);
};

export const createNewComment = (commentData) => {
    return axios.post(`http://localhost:8081/api/create-comments`, {
      ...commentData,
    });
  };