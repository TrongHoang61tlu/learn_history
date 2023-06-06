import axios from "axios";

export const getAllCourse = (inputId) => {
  return axios.get(`http://localhost:8081/api/courses?id=${inputId}`);
};

export const deleteCourse = (courseId) => {
  return axios.delete(`http://localhost:8081/api/delete-course`, {
    data: {
      id: courseId,
    },
  });
};

export const createNewCouser = ( courseData) => {
  return axios.post(`http://localhost:8081/api/create-new-course`, {
    ...courseData,
  });
};

export const updateCourse = (courseId, courseData) => {
  return axios.put(`http://localhost:8081/api/edit-course`, {
    id: courseId,
    ...courseData,
  });
};
