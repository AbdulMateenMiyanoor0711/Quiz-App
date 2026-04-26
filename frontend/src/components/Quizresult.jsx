import { useNavigate, useLocation } from "react-router";

const Quizresult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { questions = [], answers = [], category } = location.state || {};

  if (!location.state || questions.length === 0) {
    return (
      <>
        <h2>No quiz data found.</h2>
        <p>Please take a quiz first — results are lost on page refresh.</p>
        <button onClick={() => navigate("/")}>Go To Home</button>
      </>
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
    <>
      <h1>Quiz Results</h1>
      <p>
        Your Score: {score}/{questions.length}
      </p>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <strong>Q{index + 1}</strong>
            <p>{result.question.question}</p>
            <p>
              <b>You selected: </b>
              {result.answer} {result.isCorrect ? "✅ correct" : "❌ incorrect"}
            </p>
            {!result.isCorrect && (
              <p>
                <b>Correct Answer:</b> {result.correctAnswer}
              </p>
            )}
          </li>
        ))}
      </ul>
      <button
        onClick={async () => {
          await addResults();
          navigate("/");
        }}
      >
        Submit Quiz
      </button>
      <button onClick={() => navigate(`/quiz/${category}`)}>
        Take Quiz Again
      </button>
      <button onClick={() => navigate("/")}>Go To Home</button>
    </>
  );
};

export default Quizresult;
