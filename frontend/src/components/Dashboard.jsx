import { useEffect } from "react";
import { Link } from "react-router";
import auth from "../auth";
const Dashboard = () => {
  const getUsers = async () => {
    try {
      const res = await fetch("http://localhost:8080/user-answer");
      const data = await res.json();
      console.log("users", data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <Link to="/">Take Quiz</Link>
      <button
        onClick={() => {
          auth.clearCookies();
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
      <h1>Dashboard</h1>
      {/* {getUsers.map((users, index) => {
        return (
          <div key={index}>
            <div>{users.username || "anonymous"}</div>
            <div>{users.email || "no email"}</div>
            <div>{users.category || "no category"}</div>
            <div>{users.score || "no score"}</div>
          </div>
        );
      })} */}
    </>
  );
};

export default Dashboard;
