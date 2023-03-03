// import React, { useState } from "react";
import { questions } from "../questions";
import { useGlobalContext } from "../context/context";
import api from "../api";
import { useState } from "react";

function Quiz() {
  const { reloadUsersCounter, setReloadUsersCounter } = useGlobalContext();
  const { activeUser } = useGlobalContext();
  const [quizAnswers, setQuizAnswers] = useState(() => new Map());

  const [correctAnswers, setCorrectAnswers] = useState(() => new Set());

  //  const { userQuizAnswers, setUserQuizAnswers } = useGlobalContext();
  const handleChange = (questionIndex, answerIndex) => {
    const theQuestion = questions[questionIndex];
    setCorrectAnswers((set) => {
      if (theQuestion.correctAnswer === theQuestion.answers[answerIndex]) {
        set.add(theQuestion.id);
      } else {
        set.delete(theQuestion.id);
      }

      return new Set(set);
    });

    setQuizAnswers((prev) => {
      prev.set(questionIndex, answerIndex);
      // return prev;
      return new Map(prev);
    });
  };

  const handleSendBtn = async () => {
    if (!activeUser) {
      alert("no user");
    }

    await api.put(`/users/${activeUser}`, {
      trivia: Array.from(correctAnswers),
    });
    setReloadUsersCounter((c) => (c += 1));
  };

  if (!activeUser) {
    return <div className="page">Complete registration first!</div>;
  }

  return (
    <div className="page">
      Quiz
      {questions.map((item, questionIndex) => {
        return (
          <div key={item.id} className="quiz-div">
            <h2>{item.title}</h2>
            {[0, 1, 2, 3].map((answerIndex) => {
              return (
                <div className="answer-div">
                  <input
                    type="radio"
                    value={item.answers[answerIndex]}
                    checked={quizAnswers.get(questionIndex) === answerIndex}
                    onChange={() => handleChange(questionIndex, answerIndex)}
                  />
                  <span>{item.answers[answerIndex]}</span>
                </div>
              );
            })}
          </div>
        );
      })}
      <button className="btn" onClick={handleSendBtn}>
        Send
      </button>
    </div>
  );
}

export default Quiz;
