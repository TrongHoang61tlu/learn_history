import React, { useEffect, useState } from "react";
import { Lesson, LessonIcon, LessonName, Main, Title, Wrapper } from "./style";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { EditContent, fetchCourseContent } from "../../features/admin/course-contentSlice";

const CourseMapLessons = ({ lessons, title }) => {
  const sortedLessons = lessons.slice().sort((a, b) => a.id - b.id);
  const dispatch = useDispatch();
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const [status, setStatus] = useState(0); // State để cập nhật khi status thay đổi

  const handleLessonClick = (lessonId) => {
    setSelectedLessonId(lessonId);

    const courseContentId = lessonId;
    const courseContentData = {
      status: 1,
    };
    dispatch(EditContent({ courseContentId, courseContentData }));

    setStatus((prevStatus) => prevStatus + 1); // Cập nhật state status
  };

  useEffect(() => {
    
  }, [status]);

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
