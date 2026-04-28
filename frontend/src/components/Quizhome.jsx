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
    /* FIGMA */
    <>
      <div className="quizhome-page">
        <h2 className="quizhome-title">Choose a Quiz Category</h2>
        <div className="category-list">
          {QuizCategory.map((category, index) => {
            return (
              /* FIGMA */
              <div key={index} className="category-card">
                <div className="category-index">{index + 1}</div>
                <div className="category-name">{category.category}</div>
                <button
                  className="btn-take-quiz"
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
          /* FIGMA */
          <div className="popup-overlay">
            <div className="popup-card">
              <p className="popup-text">Are you Sure you want to take this Quiz</p>
              <div className="popup-actions">
                <button
                  className="btn-confirm"
                  onClick={() => {
                    navigate(`/quiz/${pendingCategoryId}`);
                    setShowPopup(false);
                  }}
                >
                  Start Quiz
                </button>
                <button
                  className="btn-cancel"
                  onClick={() => {
                    setShowPopup(false);
                    setPendingCategoryId(null);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Quizhome;
