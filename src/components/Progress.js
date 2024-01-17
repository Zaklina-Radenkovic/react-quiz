// import { useQuiz } from "../contexts/QuizContext";

function Progress({
  numQuestions,
  currentIndex,
  points,
  maxPossiblePoints,
  answer,
}) {
  // const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();

  return (
    <header className="progress">
      <progress
        max={numQuestions}
        //converting boolean (true/false) to a number (1/0) in order to add 1 to currentIndex (which is '0' at the beginnig) when the user press answer, so that progressbar can immediately to move
        value={currentIndex + Number(answer !== null)}
      />

      <p>
        Question <strong>{currentIndex + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
