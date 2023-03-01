import React from "react";
import { questions } from "../questions";
function Quiz() {
  console.log("toni");
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="page">
      Quiz
      {questions.map((item, index) => {
        return (
          <div key={index} className="quiz-div">
            <h2>{item.title}</h2>
            <div className="answer-div">
              <input
                type="radio"
                value={item.answers[0]}
                onChange={handleChange}
              />
              <span>{item.answers[0]}</span>
            </div>
            <div className="answer-div">
              <input
                type="radio"
                value={item.answers[1]}
                onChange={handleChange}
              />
              <span>{item.answers[1]}</span>
            </div>
            <div className="answer-div">
              <input
                type="radio"
                value={item.answers[2]}
                onChange={handleChange}
              />
              <span>{item.answers[2]}</span>
            </div>
            <div className="answer-div">
              <input
                type="radio"
                value={item.answers[3]}
                onChange={handleChange}
              />
              <span>{item.answers[3]}</span>
            </div>
          </div>
        );
      })}
      <button className="btn">Send</button>
    </div>
  );
}

export default Quiz;
