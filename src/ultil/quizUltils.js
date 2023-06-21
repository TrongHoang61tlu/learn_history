export const calculateScore = (answers, questions) => {
    let score = 0;
    answers.forEach((answerIndex, questionIndex) => {
      if (answerIndex === questions[questionIndex].correctOptionIndex) {
        score++;
      }
    });
    return (score / questions.length) * 100; // Calculate the percentage score
  };
  