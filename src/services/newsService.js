import axios from "axios";

export const getAllNews = (inputId) => {
  return axios.get(`http://localhost:8081/api/news?id=${inputId}`);
};

export const deleteNews = (newsId) => {
  return axios.delete(`http://localhost:8081/api/delete-news`, {
    data: {
      id: newsId,
    },
  });
};

export const createNews = ( newsData) => {
  return axios.post(`http://localhost:8081/api/create-news`, {
    ...newsData,
  });
};

export const updateNews = (newsId, newsData) => {
  return axios.put(`http://localhost:8081/api/edit-news`, {
    id: newsId,
    ...newsData,
  });
};
