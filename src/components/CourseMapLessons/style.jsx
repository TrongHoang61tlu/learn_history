import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`

export const Title = styled.h2`
  background-size: 100% 100%;
  border-radius: 13px;
  padding: 22px 16px;
  row-gap: 6px;
  background-color: #52bf75;
  background-image: 
  linear-gradient(
    to bottom,
    #fff9, transparent 50% 90%, #52bf75;
  ),
  repeating-linear-gradient(
      60deg,
      #bc058255 0 10px,
      transparent 20px 40px
    ),
    linear-gradient(to bottom, #ef08a6, #ee6c8f);
  color : #fff;
  font-family : monospace;
  font-weight : bold;
  text-shadow : 0 1px 0 #efb7de;
  box-shadow : 
  0 10px 0 #0005,
  0 5px 0  #52bf75,
  0 4px 0 7px #fff,
  0 0 30px 10px  #52bf75;
  }
`;

export const Lesson = styled.div`
  margin : 70px 0;
  border-radius: 50%;
  padding: 50px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid #b21065;
  pointer-events: ${(props) => (props.locked ? "none" : "auto")};
  background-image: 
  linear-gradient(
    to bottom,
    #fff9, transparent 50% 90%, #f5cbbc99
  ),
  repeating-linear-gradient(
      60deg,
      ${(props) => (props.completed ? '#bc058255 0 10px' : '' )} ,
      transparent 20px 40px
    ),
    linear-gradient(to bottom, #ef08a6, #ee6c8f);
  color : #fff;
  font-family : monospace;
  font-weight : bold;
  text-shadow : 0 1px 0 #efb7de;
  box-shadow : 
  0 10px 0 #0005,
  0 5px 0 #BD1360,
  0 4px 0 7px #fff,
  0 0 30px 10px #e260ae;
  transition : 0.5s;
  &:active{
    box-shadow :
    0 0px 0 #0005,
    0 0px 0 #BD1360,
    0 0px 7px #fff,
    0 0 30px 30px #e260ae;
    transform : translateY(5px);
  }
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
