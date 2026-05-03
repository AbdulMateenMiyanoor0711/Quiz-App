import { useEffect, useState } from "react";
import { Link } from "react-router";
import auth from "../auth";
const Dashboard = () => {
  const [result, setResult] = useState([]);
  const getResults = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const url = `http://localhost:8080/user-answer/${userId}`;
      const response = await fetch(url);
      const results = await response.json();
      setResult(results.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getResults();
  }, []);
  return (
    /* FIGMA */
    <div className="dashboard-page">
      <div className="dashboard-content">
        <div className="dashboard-topbar">
          <h1 className="dashboard-heading">Dashboard</h1>
          <div className="dashboard-actions">
            <Link className="btn-dashboard-link" to="/">
              Take Quiz
            </Link>
            <button
              className="btn-logout"
              onClick={() => {
                auth.clearCookies();
                window.location.href = "/login";
              }}
            >
              Logout
            </button>
          </div>
        </div>
        {/* FIGMA */}
        <div className="attempt-list">
          {result.map((users, index) => {
            return (
              <div key={index} className="attempt-card">
                <div className="attempt-field">
                  <span className="attempt-label">Attempt No</span>
                  <span className="attempt-value">{users.id}</span>
                </div>
                <div className="attempt-field">
                  <span className="attempt-label">Quiz Category</span>
                  <span className="attempt-value">
                    {users.quiz_category_id}
                  </span>
                </div>
                <div className="attempt-field">
                  <span className="attempt-label">Score</span>
                  <span className="attempt-value">{users.score}</span>
                </div>
                <div className="attempt-field">
                  <span className="attempt-label">Total Questions</span>
                  <span className="attempt-value">{users.total_questions}</span>
                </div>
                <div className="attempt-field">
                  <span className="attempt-label">Time Of Quiz Taken</span>
                  <span className="attempt-value">{users.created_at}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
