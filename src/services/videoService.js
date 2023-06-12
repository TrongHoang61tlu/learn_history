import axios from "axios";

export const getAllVideo = (inputId) => {
  return axios.get(`http://localhost:8081/api/video?id=${inputId}`);
};

export const deleteVideo = (videoId) => {
  return axios.delete(`http://localhost:8081/api/delete-video`, {
    data: {
      id: videoId,
    },
  });
};

export const createNewVideo = ( videoData) => {
  return axios.post(`http://localhost:8081/api/create-video`, {
    ...videoData,
  });
};

export const updateVideo = (videoId, videoData) => {
  return axios.put(`http://localhost:8081/api/edit-video`, {
    id: videoId,
    ...videoData,
  });
};
