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

  return (
    <div>
      <p>
        Question No {currentIndex + 1} of {quizQuestions.length}
      </p>
      <h2>{currentQuestion?.question}</h2>

      {/* Quiz Options */}
      {currentQuestion?.options?.map((option, i) => {
        return (
          <div key={i}>
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
          </div>
        );
      })}

      <div>
        <button
          disabled={currentIndex === 0}
          onClick={() => {
            setCurrentIndex(currentIndex - 1);
          }}
        >
          Previous
        </button>

        {currentIndex === quizQuestions.length - 1 ? (
          <button
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
            disabled={!selected}
            onClick={() => {
              setCurrentIndex(currentIndex + 1);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
