import React, { useEffect, useState } from "react";
import { Lesson, LessonIcon, LessonName, Main, Title, Wrapper } from "./style";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { EditContent, fetchCourseContent } from "../../features/admin/course-contentSlice";
import { updateUsers } from "../../features/admin/adminSlice";

const CourseMapLessons = ({ lessons, title }) => {
  const sortedLessons = lessons.slice().sort((a, b) => a.id - b.id);
  const dispatch = useDispatch();
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const [status, setStatus] = useState(0); // State để cập nhật khi status thay đổi
  const courseId = useParams();
  const userId = localStorage.getItem('id');
  const parsedCourseID = parseInt(courseId.id);

console.log(courseId.id);
  const handleLessonClick = (lessonId) => {
    setSelectedLessonId(lessonId);
    const courseContentId = lessonId;
    const courseContentData = {
      userId: userId,
      status: 1,
    };
    const userData = {
      
      courseId: parsedCourseID,
    };
    dispatch(EditContent({ courseContentId, courseContentData }));
    dispatch(updateUsers({userId, userData}));
    setStatus((prevStatus) => prevStatus + 1); // Cập nhật state status
  };
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Main>
        {sortedLessons.map((lesson, index) => (
          <Link to={`lesson/${lesson.id}`} state={{ lesson }} key={lesson.id}>
            <Lesson
              completed={lesson.status}
              index={index}
              onClick={() => handleLessonClick(lesson.id)}
            >
              <LessonIcon completed={lesson.completed}>
                {lesson.status ? "✓" : "●"}
              </LessonIcon>
              <LessonName completed={lesson.completed}>
                {lesson.lecture}
              </LessonName>
            </Lesson>
          </Link>
        ))}
      </Main>
    </Wrapper>
  );
};

export default CourseMapLessons;
