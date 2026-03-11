import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { startQuiz } from "../redux/quizSlice";
import { allQuizzez } from "../support/questions";
const Quizresult = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category } = useParams();

  return (
    <>
      <div>
        <div>
          <button onClick={() => navigate("/")}>Go TO Home</button>
          <button
            onClick={() => {
              dispatch(startQuiz(allQuizzez[category]));
              navigate(`/quiz/${category}`);
            }}
          >
            Take Quiz again
          </button>
        </div>
      </div>
    </>
  );
};

export default Quizresult;
