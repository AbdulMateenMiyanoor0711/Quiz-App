import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { nextQuestion, prevQuestion, selectAnswer } from "../redux/quizSlice";

const Quiz = () => {
  const dispatch = useDispatch();
  const { questions, currentIndex } = useSelector((state) => state.quiz);

  const [selected, setSelected] = useState(null);

  if (!questions || questions.length === 0) {
    return <div>No questions found</div>;
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div>
      <p>
        Question No {currentIndex + 1} of {questions.length}
      </p>

      <h2>{currentQuestion.question}</h2>

      {currentQuestion.options.map((option, i) => (
        <div key={i}>
          <label>
            <input
              type="radio"
              name="quiz-option"
              value={option}
              checked={selected === option}
              onChange={() => {
                setSelected(option);
                dispatch(selectAnswer({ index: currentIndex, answer: option }));
              }}
            />
            {option}
          </label>
        </div>
      ))}

      <div>
        <button
          disabled={currentIndex === 0}
          onClick={() => {
            dispatch(prevQuestion());
            setSelected(null);
          }}
        >
          Previous
        </button>

        {currentIndex === questions.length - 1 ? (
          <button onClick={() => alert("Quiz Submitted!")}>Submit</button>
        ) : (
          <button
            onClick={() => {
              dispatch(nextQuestion());
              setSelected(null);
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
