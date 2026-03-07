import { useSelector } from "react-redux";
import { allQuizzez } from "../support/questions";

const Quizresult = () => {
  let quiz = useSelector((state) => state.quiz);
  console.log(quiz.answers);
  console.log(allQuizzez);

  const result = allQuizzez.map((q, i) => {
    const user = answers[i];
    const correct = q.correctoption;
    return {
      question: q.question,
      userAnswers: user,
      correctAnswer: correct,
      isCorrect: user === correct,
    };
  });
  const score= result.filter((item) => item.isCorrect).length;
  return (
    <>
      <h1>QUIZ RESULTS</h1>
      <p>
        <ul></ul>
      </p>
    </>
  );
};

export default Quizresult;
