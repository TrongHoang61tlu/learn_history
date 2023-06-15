import axios from "axios";

export const getAllQuizz = (inputId) => {
  return axios.get(`http://localhost:8081/api/quizzes?id=${inputId}`);
};

export const deleteQuizz = (quizzId) => {
  return axios.delete(`http://localhost:8081/api/delete-quizz`, {
    data: {
      id: quizzId,
    },
  });
};

export const createQuizz = ( quizzData) => {
  return axios.post(`http://localhost:8081/api/create-quizz`, {
    ...quizzData,
  });
};

export const updateQuizz = (quizzId, quizzData) => {
  return axios.put(`http://localhost:8081/api/edit-quizz`, {
    id: quizzId,
    ...quizzData,
  });
};
