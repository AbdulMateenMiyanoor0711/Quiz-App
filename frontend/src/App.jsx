import { BrowserRouter, Routes, Route,  Link } from "react-router";
import Quizhome from "./components/Quizhome";
import Quiz from "./components/Quiz";
import Dashboard from "./components/Dashboard";
import Quizresult from "./components/Quizresult";
import Login from "./../src/pages/Login";
import Register from "./../src/pages/Register";

const App = () => {
  return (
    <>
      <h1>Quiz</h1>
    

      <BrowserRouter>
        <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
        <Routes>
          <Route path="/" element={<Quizhome />} />
          <Route path="/quiz/:category" element={<Quiz />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quizresult" element={<Quizresult />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
