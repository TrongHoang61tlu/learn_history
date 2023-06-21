import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin: 60px 0;
  height: 100vh;
  padding-bottom: 150px;
`;

export const VideoContainer = styled.div`
  flex: 1;
`;
export const Videotitle = styled.h1`
  font-family: "YouTube Sans", "Roboto", sans-serif;
  font-size: 2rem;
  line-height: 2.8rem;
  font-weight: 600;
  margin: 0;
`;
export const Videodescription = styled.p`
  font-family: "Roboto", "Arial", sans-serif;
  font-size: 1.4rem;
  line-height: 2rem;
  font-weight: 400;
  margin: 0;
`;
export const LessonListContainer = styled.div`
  flex: 0 0 450px;
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
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#e0e0e0" : "transparent")};
  display: flex;
  width: 100%;
  font-size: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const LessonTitle = styled.h3`
  margin: 0;
  padding-left: 10px;
  font-size: 1.2rem;
  line-height: 2rem;
  font-weight: 500;
`;

export const LessonThumbnail = styled.img`
  width: 110px;
  border-radius: 5px;
`;

export const LessonContent = styled.h2`
  margin: 0;
  padding-bottom: 10px;
`;

export const TextQuestion = styled.h2``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonExit = styled.button`
  background-image: linear-gradient(#e15648, rgb(81 16 85));
  border: 0;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 5px 15px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: Montserrat, sans-serif;
  font-size: 0.9em;
  margin: 5px;
  padding: 10px 15px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;
export const ButtonNext = styled.button`
  background-image: linear-gradient(#0dccea, #0d70ea);
  border: 0;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 5px 15px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: Montserrat, sans-serif;
  font-size: 0.9em;
  margin: 5px;
  padding: 10px 15px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;
