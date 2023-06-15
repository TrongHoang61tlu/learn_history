import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Title = styled.h2`
  justify-content: center;
  border-radius: 20px;
  padding: 50px 0;
  display: flex;
  align-items: center;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.6),
      transparent 50%,
      transparent 90%,
      rgb(62 197 41)
    ),
    repeating-linear-gradient(
      60deg,
      rgb(124 223 47) 0px,
      rgb(135 242 83) 90px,
      transparent 20px,
      transparent 40px
    ),
    linear-gradient(rgb(122 234 38), rgb(72 255 0));
  color: #fff;
  font-family: monospace;
  font-weight: bold;
  text-shadow: 0 1px 0 #efb7de;
`;

export const Main = styled.div`
  width: 50%;
  margin: auto;
`;

export const Lesson = styled.div`
  margin: 30px 30px;
  border-radius: 50%;
  padding: 30px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid #b21065;
  pointer-events: ${(props) => (props.locked ? "none" : "auto")};
  background-image: linear-gradient(
      to bottom,
      #fff9,
      transparent 50% 90%,
      #f2ed40
    ),
    repeating-linear-gradient(
      60deg,
      ${(props) => (props.completed ? "#f2ee53 0 10px" : "")},
      transparent 20px 40px
    ),
    linear-gradient(to bottom, #eadd26, #ffe000);
  color: #fff;
  font-family: monospace;
  font-weight: bold;
  text-shadow: 0 1px 0 #efb7de;
  box-shadow: rgba(0, 0, 0, 0.333) 0px 10px 0px, rgb(190 224 237) 0px 5px 0px,
    rgb(255, 255, 255) 0px 4px 0px 7px, rgb(141 196 209) 0px 0px 30px 10px;
  transition: 0.5s;
  &:active {
    box-shadow: rgba(0, 0, 0, 0.333) 0px 0px 0px, rgb(19 188 189) 0px 0px 0px,
      rgb(255, 255, 255) 0px 0px 7px, rgb(77 153 191) 0px 0px 30px 30px;
    transform: translateY(5px);
  }
  float: ${(props) => (props.index % 2 === 0 ? "left" : "right")};
  order: ${(props) => props.id};
`;

export const LessonIcon = styled.div`
  font-size: 22px;
  color: ${(props) => (props.completed ? "#fff" : "#52bf75")};
  margin-right: 10px;
`;

export const LessonName = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.completed ? "#fff" : "#333")};
`;
