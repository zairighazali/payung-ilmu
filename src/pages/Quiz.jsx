import { quizData } from "../data/quizData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const nav = useNavigate();

  const click = (opt) => {
    if (opt === quizData[index].answer) {
      setScore(score + 1);
    }
    if (index + 1 < quizData.length) {
      setIndex(index + 1);
    } else {
      nav("/result", { state: { score } });
    }
  };

  return (
    <div className="container text-center p-5">
      <h3>{quizData[index].question}</h3>
      {quizData[index].options.map(o => (
        <button
          key={o}
          className="btn btn-outline-primary m-2"
          onClick={() => click(o)}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
export default Quiz;