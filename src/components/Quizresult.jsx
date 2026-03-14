import { useNavigate } from "react-router";

const Quizresult = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Quiz Results</h1>

      <button onClick={() => navigate("/")}>Go To Home</button>
      <button>Take Quiz Again</button>
    </>
  );
};

export default Quizresult;
