import React from "react";
import { Lesson, LessonIcon, LessonName, Main, Title, Wrapper } from "./style";

const CourseMapLessons = ({ lessons, title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Main>
        {lessons.map((lesson, index) => (
          <Lesson
            key={lesson.id}
            completed={lesson.status}
            index={index}
            // locked={!lesson.completed && index > 0}
          >
            <LessonIcon completed={lesson.completed}>
              {lesson.status ? "✓" : "●"}
            </LessonIcon>
            <LessonName completed={lesson.completed}>{lesson.chapterName}</LessonName>
          </Lesson>
        ))}
      </Main>
    </Wrapper>
  );
};

export default CourseMapLessons;
