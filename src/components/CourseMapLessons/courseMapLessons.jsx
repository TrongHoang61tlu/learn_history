import React from "react";
import { Lesson, LessonIcon, LessonName, Main, Title, Wrapper } from "./style";
import { Link } from "react-router-dom";

const CourseMapLessons = ({ lessons, title }) => {
  const sortedLessons = lessons.slice().sort((a, b) => a.id - b.id);

  console.log(sortedLessons);
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Main>
        {sortedLessons.map((lesson, index) => (
          <Link to={`lesson/${lesson.id}`} >

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
          </Link>
        ))}
      </Main>
    </Wrapper>
  );
};

export default CourseMapLessons;
