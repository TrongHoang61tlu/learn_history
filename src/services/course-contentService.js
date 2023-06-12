import axios from "axios";

export const getAllCourseContent = (inputId) => {
  return axios.get(`http://localhost:8081/api/get-course-content?id=${inputId}`);
};

export const deleteCourseContent = (courseContentId) => {
  return axios.delete(`http://localhost:8081/api/delete-course-content`, {
    data: {
      id: courseContentId,
    },
  });
};

export const createNewCouserContent = ( courseContentData) => {
  return axios.post(`http://localhost:8081/api/create-new-course-content`, {
    ...courseContentData,
  });
};

export const updateCourseContent = (courseContentId, courseContentData) => {
  return axios.put(`http://localhost:8081/api/edit-course-content`, {
    id: courseContentId,
    ...courseContentData,
  });
};
