function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          // but like this we have all answers displayed immediately (correct and wrong)
          //so we need to display that only if we have answer
          // className={`btn btn-option ${index === answer ? "answer" : ""}
          //  ${index === question.correctOption ? "correct" : "wrong"}`}

          className={`btn btn-option ${index === answer ? "answer" : ""}
           ${
             hasAnswered
               ? index === question.correctOption
                 ? "correct"
                 : "wrong"
               : ""
           }
           `}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
