import { data, useNavigate } from "react-router";
import { allQuizzez } from "../support/questions";
import { useDispatch } from "react-redux";
import { startQuiz } from "../redux/quizSlice";
import { useState, useEffect } from "react";

const Quizhome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const [pendingCategory, setPendingCategory] = useState(null);
  const [QuizCategory, setQuizCategory] = useState([]);

  useEffect(() => {
    quizCategories;
  }, [])
  
  const quizCategories = async () => {
    try {
      let url = "http://localhost:8080/quiz-category";
      let response = await fetch(url);
      let results = await response.json();
      console.log("Quiz Categories", results);
      let data = results.data;
      setQuizCategory.data;
      console.log(data);
      
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <div>{QuizCategory[0]}</div>
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
                dispatch(
                  startQuiz({
                    questions: allQuizzez[pendingCategory],
                    category: pendingCategory,
                  }),
                );
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
