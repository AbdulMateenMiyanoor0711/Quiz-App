import { useNavigate } from "react-router";
import { allQuizzez } from "../support/questions";
import { useDispatch, useSelector } from "react-redux";

import { startQuiz } from "../redux/quizSlice";
import { useState } from "react";
const Quizhome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { questions, currentIndex } = useSelector((state) => state.quiz);
  const [showPopup, setShowPopup] = useState(false);
  const [pendingCategory, setPendingCategory] = useState(null);
  return (
    <>
      <div className="carbox">
        <div className="innercard">
          <div className="quizcard">HTML</div>
          <button
            className="quizbutton"
            onClick={() => {
              setPendingCategory("html");
              setShowPopup(true);
            }}
          >
            TAKE QUIZ
          </button>
        </div>

        <div className="innercard">
          <div className="quizcard">JAVASCRIPT</div>
          <button
            className="quizbutton"
            onClick={() => {
              setPendingCategory("java");
              setShowPopup(true);
            }}
          >
            TAKE QUIZ
          </button>
        </div>
        <div className="innercard">
          <div className="quizcard">NODE.JS</div>
          <button
            className="quizbutton"
            onClick={() => {
              setPendingCategory("node");
              setShowPopup(true);
            }}
          >
            TAKE QUIZ
          </button>
        </div>
        <div className="innercard">
          <div className="quizcard">REACT</div>
          <button
            className="quizbutton"
            onClick={() => {
              setPendingCategory("react");
              setShowPopup(true);
            }}
          >
            TAKE QUIZ
          </button>
        </div>
        <div className="innercard">
          <div className="quizcard">SQL</div>
          <button
            className="quizbutton"
            onClick={() => {
              setPendingCategory("sql");
              setShowPopup(true);
            }}
          >
            TAKE QUIZ
          </button>
        </div>
        {showPopup && (
          <div>
            <p>Are you Sure you want to take this Quiz</p>
            <button
              onClick={() => {
                dispatch(startQuiz(allQuizzez[pendingCategory]));
                navigate(`/quiz/${pendingCategory}`);
                setShowPopup(false);
              }}
            >
              Start Quiz
            </button>
            <button
              onClick={() => {
                setShowPopup(false);
                setPendingCategory(null);
              }}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Quizhome;
