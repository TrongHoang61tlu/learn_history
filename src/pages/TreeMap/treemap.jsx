// CourseMap.js

import React from "react";
import CourseMapLessons from "../.././components/CourseMapLessons/courseMapLessons";
import {  LessonsWrapper, Wrapper } from "./style";
import SideBar from "../../components/Layout/Sidebar/sidebar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function CourseMap() {
  const { id } = useParams();
  const courseId = parseInt(id);

  const courseData = useSelector((state) => state.coursebyuser.courses);
  const course = courseData.find((course) => course.id === courseId);

  if (!course) {
    return <div>Không tìm thấy khóa học.</div>;
  }
  const courseContents = course.CourseContents || [];
  return (
    <>
      <Wrapper>
        <SideBar />
        <LessonsWrapper>
          <CourseMapLessons title={course.title} lessons={courseContents} />
        </LessonsWrapper>
      </Wrapper>
    </>
  );
}

export default CourseMap;
