import { useNavigate, useLocation } from "react-router";

const Quizresult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { questions = [], answers = [], category } = location.state || {};

  const results = questions.map((question, index) => ({
    question: question,
    answer: answers[index],
    correctAnswer: question.ans,
    isCorrect: answers[index] === question.ans,
  }));

  const score = results.filter((r) => r.isCorrect).length;
  console.log(
    "User Id",
    "Quiz Category id",
    category,
    "score",
    score,
    "Total Questions",
    questions.length,
  );

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
