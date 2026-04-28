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
      {/* FIGMA */}
      <BrowserRouter>
        <header className="app-header">
          <Link className="app-logo" to="/">▶ <span>techpaathshala.</span></Link>
          <nav className="app-nav">
            {!isValid && <Link to="/login">Login</Link>}
            {!isValid && <Link to="/register">Register</Link>}
            {isValid && <Link to="/dashboard">Dashboard</Link>}
          </nav>
        </header>
        <Routes>
          <Route
            path="/"
            element={isValid ? <Quizhome /> : <Navigate to="/login" />}
          />
          <Route path="/quiz/:category" element={<Quiz />} />
          <Route
            path="/dashboard"
            element={isValid ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="/quizresult" element={<Quizresult />} />
          <Route
            path="/login"
            element={isValid ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={isValid ? <Navigate to="/" /> : <Register />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
