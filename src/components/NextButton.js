// import { useQuiz } from "../contexts/QuizContext";

function NextButton({ dispatch, answer, currentIndex, numQuestions }) {
  // const { dispatch, answer, index, numQuestions } = useQuiz();

  //if there is no answer, no button
  if (answer === null) return null;

  if (currentIndex < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (currentIndex === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
