import styled from "styled-components";
export const QuestionContainer = styled.div`
  text-align: center;
  width: 750px;
  height: 600px;
  margin: 5rem 0 15rem 0;
  background-color: whitesmoke;
  padding: 2rem;
  border-radius: 1rem;
  position: relative;
  border: 1px solid black;
  
`;

export const QuestionText = styled.h1`
  text-align: center;
  margin: 2rem 0;
`;

export const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom : 50px;
`;

export const Answer = styled.div`
    padding: 10px;
  background-color: black;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin: 1rem 0;
  width: 70%;
  text-align: center;
  letter-spacing: 2px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;

  &:hover {
    background-color: #8ec5fc;
  }
`;

export const Score = styled.p`
  font-weight: bold;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
`;

export const QuestionNumber = styled.p`
  font-weight: bold;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;

export const Scored = styled.h2`
   
  justify-content: center;
  display: flex;
  margin : auto;
`
export const Image = styled.img`
  width: 100px;
  justify-content: center;
  display: flex;
  margin : auto;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top : 70px;
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

export const Back = styled.div`
  display: flex;
  cursor: pointer;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Time = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`