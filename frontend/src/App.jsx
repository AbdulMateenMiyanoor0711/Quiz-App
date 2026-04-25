import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router";
import Quizhome from "./components/Quizhome";
import Quiz from "./components/Quiz";
import Dashboard from "./components/Dashboard";
import Quizresult from "./components/Quizresult";
import Login from "./../src/pages/Login";
import Register from "./../src/pages/Register";
import { useState } from "react";
import auth from "./auth";
const App = () => {
  let val = auth.getCookies();
  const [isValid, setisValid] = useState(val);
  return (
    <>
      <h1>Quiz</h1>

      <BrowserRouter>
        <nav>
          {!isValid && <Link to="/login">Login</Link>}
          {!isValid && <Link to="/register">Register</Link>}
          {isValid && <Link to="/dashboard">Dashboard</Link>}
        </nav>
        <Routes>
          <Route path="/"element={isValid ? <Quizhome /> : <Navigate to="/login" />} />
          <Route path="/quiz/:category" element={<Quiz />} />
          <Route
            path="/dashboard"
            element={isValid ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="/quizresult" element={<Quizresult />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
