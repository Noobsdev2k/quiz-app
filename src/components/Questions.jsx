import React from "react";
import "./questions.css";
export default function Questions(props) {
  const {
    question: { question, correct_answer, incorrect_answers },
    handleAnswer,
  } = props;
  const ramdomAnswer = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );
  console.log(props);
  return (
    <div className="question">
      <h2 dangerouslySetInnerHTML={{ __html: question }} className="title"></h2>
      <div className="answer-btns">
        {ramdomAnswer.map((item, index) => {
          return (
            <button
              className="btn"
              key={index}
              onClick={() => handleAnswer(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}
