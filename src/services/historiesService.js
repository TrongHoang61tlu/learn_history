import axios from "axios";

export const getAllHistories = (inputId) => {
  return axios.get(`http://localhost:8081/api/histories?id=${inputId}`);
};

export const createNewHistories = ( historiesData) => {
  return axios.post(`http://localhost:8081/api/create-histories`, {
    ...historiesData,
  });
};

