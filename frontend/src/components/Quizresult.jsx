import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { startQuiz } from "../redux/quizSlice";
import { allQuizzez } from "../support/questions";
const Quizresult = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { questions, answers, category } = useSelector((state) => state.quiz);
  const results = questions.map((question, index) => ({
    question: question,
    answer: answers[index],
    correctAnswer: question.ans,
    isCorrect: answers[index] === question.ans,
  }));

  const score = results.filter((r) => r.isCorrect).length;
  return (
    <>
      <h1>Quiz Results</h1>
      <p>
        Your Score :{score}/{questions.length}
      </p>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <strong> Q{index + 1}</strong>
            <p>{result.question.question}</p>
            <p>
              {" "}
              <b>You selected -</b>
              {result.answer} {result.isCorrect ? "correct" : "incorrect"}
            </p>
            {!result.isCorrect && (
              <>
                <br />
                Correct Answer:{result.correctAnswer}
              </>
            )}
            <p></p>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          dispatch(startQuiz({ questions: allQuizzez[category], category }));
          navigate(`/quiz/${category}`);
        }}
      >
        Take Quiz Again
      </button>
      <button onClick={() => navigate("/")}>Go To Home </button>
    </>
  );
};

export default Quizresult;
