import { useNavigate, useLocation } from "react-router";
const Quizresult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { questions = [], answers = [], category } = location.state || {};
  if (!location.state || questions.length === 0) {
    return (
      /* FIGMA */
      <div className="result-page">
        <div className="result-content">
          <h2 className="result-heading">No quiz data found.</h2>
          <p className="result-score">
            Please take a quiz first — results are lost on page refresh.
          </p>
          <button className="btn-result-primary" onClick={() => navigate("/")}>
            Go To Home
          </button>
        </div>
      </div>
    );
  }

  const results = questions.map((question, index) => ({
    question: question,
    answer: answers[index],
    correctAnswer: question.ans,
    isCorrect: answers[index] === question.ans,
  }));

  const userId = localStorage.getItem("userId");
  const score = results.filter((r) => r.isCorrect).length;
  console.log("Score :", score);
  console.log("Total Questions", questions.length);
  console.log("User Id", userId);

  async function addResults() {
    if (!userId) {
      alert(
        "Error: You must be logged in to submit results. userId not found.",
      );
      return;
    }
    try {
      const res = await fetch("http://localhost:8080/user-answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          quiz_category_id: category,
          score: score,
          total_questions: questions.length,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.msg || "quiz result submission failed");
      }
      console.log(data);
      alert("Quiz result submitted!");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    /* FIGMA */
    <div className="result-page">
      <div className="result-content">
        <h1 className="result-heading">Quiz Results</h1>
        <p className="result-score">
          Your Score:{" "}
          <strong>
            {score}/{questions.length}
          </strong>
        </p>

        {/* FIGMA */}
        <ul className="result-list" style={{ listStyle: "none", padding: 0 }}>
          {results.map((item, i) => (
            <li
              key={i}
              className={`result-item ${item.isCorrect ? "correct" : "wrong"}`}
            >
              <p>
                <strong>Q{i + 1}:</strong> {item.question.question}
              </p>
              <p>
                Your Answer:{" "}
                <span
                  className={item.isCorrect ? "answer-correct" : "answer-wrong"}
                >
                  {item.answer ?? "Not answered"}
                </span>
              </p>
              {!item.isCorrect && (
                <p>
                  Correct Answer:{" "}
                  <span className="answer-correct">{item.correctAnswer}</span>
                </p>
              )}
            </li>
          ))}
        </ul>

        {/* FIGMA */}
        <div className="result-actions">
          <button
            className="btn-result-primary"
            onClick={async () => {
              await addResults();
              navigate("/");
            }}
          >
            Submit Quiz
          </button>
          <button
            className="btn-result-outline"
            onClick={async () => {
              await addResults();
              navigate(`/quiz/${category}`);
            }}
          >
            Take Quiz Again
          </button>
          <button
            className="btn-result-outline"
            onClick={async () => {
              await addResults();
              navigate("/");
            }}
          >
            Go To Home
          </button>
          <button
            className="btn-result-outline"
            onClick={async () => {
              await addResults();
              navigate("/dashboard");
            }}
          >
            Go To Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quizresult;
