import { BrowserRouter, Routes, Route } from "react-router";
import Quizhome from "./components/Quizhome";
import Quiz from "./components/Quiz";
import Dashboard from "./components/Dashboard";
import Quizresult from "./components/Quizresult";
import Register from "./components/Register"
import Login from "./components/Login"
const App = () => {
  return (
    <>
      <h1>Quiz</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Quizhome />} />
          <Route path="/quiz/:category" element={<Quiz />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quizresult" element={<Quizresult />} />
         <Route path="/register" element={<Register/>}/>
         <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
