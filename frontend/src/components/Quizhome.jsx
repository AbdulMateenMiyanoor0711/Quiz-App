import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

const Quizhome = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [pendingCategoryId, setPendingCategoryId] = useState(null);
  const [QuizCategory, setQuizCategory] = useState([]);

  const quizCategories = async () => {
    try {
      let url = "http://localhost:8080/quiz-category";
      let response = await fetch(url);
      let results = await response.json();
      console.log("Quiz Categories", results);
      let quizData = results.data;
      setQuizCategory(quizData);
      console.log(quizData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    quizCategories();
  }, []);

  return (
    <>
      <div>
        <div>
          {QuizCategory.map((category, index) => {
            return (
              <div key={index}>
                <div>{index + 1}</div>
                <div>{category.category}</div>
                <button
                  onClick={() => {
                    setPendingCategoryId(category.id);
                    setShowPopup(true);
                  }}
                >
                  Take Quiz
                </button>
              </div>
            );
          })}
        </div>
        {showPopup && (
          <div>
            <p>Are you Sure you want to take this Quiz</p>
            <button
              onClick={() => {
                navigate(`/quiz/${pendingCategoryId}`);
                setShowPopup(false);
              }}
            >
              Start Quiz
            </button>
            <button
              onClick={() => {
                setShowPopup(false);
                setPendingCategoryId(null);
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
