import React from "react";
import { Lesson, LessonIcon, LessonName, Title, Wrapper } from "./style";

const CourseMapLessons = ({ lessons, title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {lessons.map((lesson, index) => (
        <Lesson
          key={lesson.id}
          completed={lesson.completed}
          // locked={!lesson.completed && index > 0}
        >
          <LessonIcon completed={lesson.completed}>
            {lesson.completed ? "✓" : "●"}
          </LessonIcon>
          <LessonName completed={lesson.completed}>{lesson.title}</LessonName>
        </Lesson>
      ))}
    </Wrapper>
  );
};

export default CourseMapLessons;
