import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin : 50px 0;
  height : 100vh;
`;

export const VideoContainer = styled.div`
  flex: 1;
`;
export const Videotitle = styled.h1`

`
export const Videodescription = styled.p`

`
export const LessonListContainer = styled.div`
  flex: 0 0 300px;
  background-color: #f5f5f5;
  padding: 20px;
`;

export const VideoPlayer = styled.video`
  width: 100%;
`;

export const LessonList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LessonListItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#e0e0e0" : "transparent")};
  padding: 10px;
`;

export const LessonTitle = styled.h3`
  margin: 0;
`;
