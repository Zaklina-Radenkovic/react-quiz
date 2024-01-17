// import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question({ question, dispatch, answer }) {
  // const { questions, index } = useQuiz();
  // const question = questions.at(currentIndex);

  console.log(question);

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Question;
