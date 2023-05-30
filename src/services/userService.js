import axios from "axios";

export const getAllUsers = (inputId) => {
  return axios.get(`http://localhost:8081/api/users?id=${inputId}`);
};

export const deleteUser = (userId) => {
  return axios.delete(`http://localhost:8081/api/delete-user`, {
    data: {
      id: userId,
    },
  });
};

export const updateUser = (userId, userData) => {
  return axios.put(`http://localhost:8081/api/edit-user`, {
    id: userId,
    ...userData,
  });
};
