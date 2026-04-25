import React from "react";
import { Link } from "react-router";
const Dashboard = () => {
  return (
    <>
      <Link to="/">Go to Home</Link>
      <h4>Hello Name</h4>
      <h4>Total number of times Quiz Attempted</h4>
      <h4>Quiz Category</h4>
      <h4>Quiz Score</h4>
    </>
  );
};

export default Dashboard;
