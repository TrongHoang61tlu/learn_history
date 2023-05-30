// CourseMap.js

import React from "react";
import CourseMapLessons from "../.././components/CourseMapLessons/courseMapLessons";
import { Info, LessonsWrapper, Title, Wrapper } from "./style";
import SideBar from "../../components/Layout/Sidebar/sidebar";

function CourseMap() {
  return (
    <>
      <Wrapper>
      <SideBar />
        <Title>Course Map</Title>
        <LessonsWrapper>
          <CourseMapLessons
            title="Vua hùng và các con trai yêu quý :))
          "
            icon="https://www.duolingo.com/images/skills/icon_basic_1.svg"
            lessons={[
              {
                id: 1,
                title: "Phrases",
                completed: true,
              },
              {
                id: 2,
                title: "Intro",
                completed: true,
              },
              {
                id: 3,
                title: "People 1",
                completed: false,
              },

              {
                id: 4,
                title: "People 2",
                completed: false,
              },
              {
                id: 5,
                title: "People 2",
                completed: false,
              },
              {
                id: 6,
                title: "People 2",
                completed: false,
              },
            ]}
          />
        </LessonsWrapper>
      <Info>
        ahvadjavdja
      </Info>
      </Wrapper>
    </>
  );
}

export default CourseMap;
