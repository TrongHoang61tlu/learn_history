import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Question from "./Question";
import { Container } from "./style";

const Quiz = () => {
  const { id, quizzId } = useParams();
  const parsedContentID = parseInt(id);
  const parsedQuizzID = parseInt(quizzId);
  const quizz = useSelector((state) => state.quizz.quizz);
  const [quizzData, setQuizzData] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    const selectedQuizzData = quizz.filter(
      (quizz) => quizz.contentId === parsedContentID
    );
    setQuizzData(selectedQuizzData);
  }, [quizz, parsedContentID]);

//   console.log(quizzData);

  return (
    <Container>
      <Question
        questionIndex={questionIndex}
        questions={quizzData}
        setQuestionIndex={setQuestionIndex}
      />
    </Container>
  );
};

export default Quiz;
