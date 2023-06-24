import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin: 60px 0;
  height: 100vh;
  padding-bottom: 750px;
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
  justify-content: end;
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

export const LogoMain = styled.img`
  width: 100px;
  display: flex;
  justify-content: center;
  margin: auto;
`;

export const Section = styled.section``;

export const Container = styled.div`
  margin-top: 5rem;
  padding-top: 0.2rem;
  background-color: #ccc;
  border-radius: 1rem;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`;

export const CardBody = styled.div``;

export const Title = styled.h6`
font-size: 1rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 0.5rem;
`;

export const Info = styled.p`
  font-size: 0.7rem;
  color: #6c757d;
  margin: 0;
`;

export const Content = styled.p`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ActionLink = styled.a`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
  color: #000;
  text-decoration: none;

  &:hover {
    color: #000;
    text-decoration: none;
  }

  .icon {
    margin-right: 0.5rem;
  }
`;
export const Hedder = styled.div`
  padding: 0.75rem;
  background-color: #f8f9fa;
`;

export const Footer = styled.div`
  background-color: #f8f9fa;
  height: 20rem;
  overflow-y: scroll;
  padding: 0.75rem;
`;

export const CommentContainer = styled.div`
  align-items: flex-start;
  width: 100%;
`;

export const CommentTextArea = styled.textarea`
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  resize: none;
`;

export const CommentLabel = styled.label`
  color: #000;
`;

export const CommentActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
  padding-top: 0.25rem;

  button {
    margin-right: 0.5rem;
  }
`;
