import { BrowserRouter, Routes, Route } from "react-router";
import Quizhome from "./components/Quizhome";
import Quiz from "./components/Quiz";
import Dashboard from "./components/Dashboard";
const App = () => {
  return (
    <>
      <h1>Quiz</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Quizhome />} />
          <Route path="/quiz/:category" element={<Quiz />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
