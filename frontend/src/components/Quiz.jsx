import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";

const Quiz = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const fetchQuestions = async () => {
    try {
      const url = `http://localhost:8080/quiz-question/${category}`;
      const response = await fetch(url);
      const results = await response.json();
      const quizData = results.data;
      console.log("Quiz Questions", quizData);
      setQuizQuestions(quizData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchQuestions();
  }, [category]);
  const selected = answers[currentIndex];
  const currentQuestion = quizQuestions[currentIndex];

  /* FIGMA — progress percentage */
  const progressPct = quizQuestions.length
    ? Math.round(((currentIndex + 1) / quizQuestions.length) * 100)
    : 0;

  return (
    /* FIGMA */
    <div className="quiz-page">
      <div className="quiz-content">
        <p className="quiz-header-text">
          Question No {currentIndex + 1} of {quizQuestions.length}
        </p>
        {/* FIGMA — progress bar */}
        <div className="quiz-progress-bar">
          <div
            className="quiz-progress-fill"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <h2 className="quiz-question-text">{currentQuestion?.question}</h2>

        {/* FIGMA — options as numbered list */}
        <ol className="quiz-options-list">
          {currentQuestion?.options?.map((option, i) => {
            return (
              <li key={i} className="quiz-option-item">
                <label>
                  <input
                    type="radio"
                    name="quiz-option"
                    value={option}
                    checked={selected === option}
                    onChange={() => {
                      const newAnswers = [...answers];
                      newAnswers[currentIndex] = option;
                      setAnswers(newAnswers);
                    }}
                  />
                  {option}
                </label>
              </li>
            );
          })}
        </ol>

        {/* FIGMA */}
        <div className="quiz-nav">
          <button
            className="btn-quiz-nav"
            disabled={currentIndex === 0}
            onClick={() => {
              setCurrentIndex(currentIndex - 1);
            }}
          >
            ← Previous
          </button>

          {currentIndex === quizQuestions.length - 1 ? (
            <button
              className="btn-quiz-nav"
              onClick={() => {
                navigate("/quizresult", {
                  state: {
                    questions: quizQuestions,
                    answers: answers,
                    category: category,
                  },
                });
              }}
            >
              Submit
            </button>
          ) : (
            <button
              className="btn-quiz-nav"
              disabled={!selected}
              onClick={() => {
                setCurrentIndex(currentIndex + 1);
              }}
            >
              Submit &amp; Continue →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
