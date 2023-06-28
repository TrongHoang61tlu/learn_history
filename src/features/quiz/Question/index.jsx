import { useState, useEffect } from "react";
import Modal from "react-modal";
import {
  Answer,
  AnswersContainer,
  Back,
  ButtonContainer,
  ButtonExit,
  ButtonNext,
  Image,
  QuestionContainer,
  QuestionNumber,
  QuestionText,
  Score,
  Scored,
  Time,
  Top,
} from "./styled";
import Congratulation from "../../../components/Confetti";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addHistories, fetchHistories } from "../../course/historiesSlice";
import dayjs from "dayjs";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "400px",
    height: "250px",
    overfolow: "scroll",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
  },
  overlay: {
    zIndex: 9999,
    backgroundColor: "rgba(0, 7, 52, 0.5)",
  },
};

const Question = ({ questionIndex, setQuestionIndex, questions }) => {
  const dispatch = useDispatch();
  const { id, courseId } = useParams();
  const currentQuestion = questions[questionIndex];
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showCongratulation, setShowCongratulation] = useState(false);
  const idUser = localStorage.getItem("id");
  const parsedUserId = parseInt(idUser);
  const parseId = parseInt(id);
  const parsedCourseId = parseInt(courseId);

  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleAddComment = async () => {
    // Tạo payload cho action
    const historiesPayload = {
      courseID: parsedCourseId,
      userID: parsedUserId,
      contentID: parseId,
      score: score,
      learningTime : seconds,
    };

    // Dispatch action để thêm bình luận mới
    await dispatch(addHistories(historiesPayload));
    dispatch(fetchHistories());
    setShowModal(false);
    setShowCongratulation(false);
  };

  const handleClick = (isCorrect) => {
    if (questionIndex < questions.length - 1) {
      if (isCorrect) {
        setScore((score) => score + 100);
      }
      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      if (isCorrect) {
        setScore((score) => score + 100);
      }
      setShowModal(true);
      setShowCongratulation(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuestionIndex(0); // Đặt lại chỉ số câu hỏi về 0
    setScore(0); // Đặt lại điểm số về 0
    setShowModal(false);
    setShowCongratulation(false);
  };

  const handleBack = () => {
    window.history.back();
  };

  useEffect(() => {
    if (showModal) {
      console.log("Modal is open");
      // Thực hiện các tác vụ khác liên quan đến modal
    }
  }, [showModal]);

  return (
    <QuestionContainer>
      <Top>
        <Back>
          <FaArrowLeft onClick={handleBack} />
        </Back>
        <Time>{dayjs().startOf("day").second(seconds).format("mm:ss")}</Time>
      </Top>
      <QuestionText>{currentQuestion?.question}</QuestionText>
      <AnswersContainer>
        {currentQuestion?.option1 && (
          <Answer
            onClick={() =>
              handleClick(currentQuestion.option1 === currentQuestion.answer)
            }
          >
            {currentQuestion.option1}
          </Answer>
        )}
        {currentQuestion?.option2 && (
          <Answer
            onClick={() =>
              handleClick(currentQuestion.option2 === currentQuestion.answer)
            }
          >
            {currentQuestion.option2}
          </Answer>
        )}
        {currentQuestion?.option3 && (
          <Answer
            onClick={() =>
              handleClick(currentQuestion.option3 === currentQuestion.answer)
            }
          >
            {currentQuestion.option3}
          </Answer>
        )}
        {currentQuestion?.option4 && (
          <Answer
            onClick={() =>
              handleClick(currentQuestion.option4 === currentQuestion.answer)
            }
          >
            {currentQuestion.option4}
          </Answer>
        )}
      </AnswersContainer>
      <Score>
        Score: <span>{score}</span>
      </Score>
      <QuestionNumber>
        Question <span>{questionIndex + 1}</span>/{questions.length + 1}
      </QuestionNumber>

      {showModal && (
        <Modal
          isOpen={showModal}
          style={customStyles}
          contentLabel="Score Modal"
        >
          <Image src="https://res.cloudinary.com/do688zacl/image/upload/v1687588358/jjonhpcqlkrz4a54mdzm.png" />
          <Scored>Điểm của bạn: {score}</Scored>
          <ButtonContainer>
            <ButtonExit onClick={handleAddComment}>Lưu</ButtonExit>
            <ButtonNext onClick={handleRestartQuiz}>Làm lại</ButtonNext>
          </ButtonContainer>
        </Modal>
      )}
      {showCongratulation && <Congratulation />}
    </QuestionContainer>
  );
};

export default Question;
