// import React, { useState } from "react";
import { questions } from "../questions";
import { useGlobalContext } from "../context/context";
import api from "../api";
import { useState } from "react";

function Quiz() {
  const { reloadUsersCounter, setReloadUsersCounter } = useGlobalContext();
  const { jazzMusicHobby, moviesHobby, foodieHobby, booksHobby } =
    useGlobalContext();
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
    // console.log(e.target.value);
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

  // if (!activeUser) {
  //   return <div className="page">Complete registration first!</div>;
  // }

  return (
    <div className="page">
      {/* {questions.map((item, questionIndex) => {
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
      })} */}

      {jazzMusicHobby ? (
        <div key={questions[0].id} className="quiz-div">
          <h2>{questions[0].title}</h2>
          {[0, 1, 2, 3].map((answerIndex) => {
            return (
              <div className="answer-div">
                <input
                  type="radio"
                  name="JazzMusic"
                  value={questions[0].answers[answerIndex]}
                  checked={quizAnswers.get(0) === answerIndex}
                  onChange={() => handleChange(0, answerIndex)}
                />
                <span>{questions[0].answers[answerIndex]}</span>
              </div>
            );
          })}
        </div>
      ) : null}
      {moviesHobby ? (
        <div key={questions[1].id} className="quiz-div">
          <h2>{questions[1].title}</h2>
          {[0, 1, 2, 3].map((answerIndex) => {
            return (
              <div className="answer-div">
                <input
                  type="radio"
                  name="Movies"
                  value={questions[1].answers[answerIndex]}
                  checked={quizAnswers.get(1) === answerIndex}
                  onChange={() => handleChange(1, answerIndex)}
                />
                <span>{questions[1].answers[answerIndex]}</span>
              </div>
            );
          })}
        </div>
      ) : null}
      {foodieHobby ? (
        <div key={questions[2].id} className="quiz-div">
          <h2>{questions[2].title}</h2>
          {[0, 1, 2, 3].map((answerIndex) => {
            return (
              <div className="answer-div">
                <input
                  type="radio"
                  name="foodie"
                  value={questions[2].answers[answerIndex]}
                  checked={quizAnswers.get(2) === answerIndex}
                  onChange={() => handleChange(2, answerIndex)}
                />
                <span>{questions[2].answers[answerIndex]}</span>
              </div>
            );
          })}
        </div>
      ) : null}
      {booksHobby ? (
        <div key={questions[3].id} className="quiz-div">
          <h2>{questions[3].title}</h2>
          {[0, 1, 2, 3].map((answerIndex) => {
            return (
              <div className="answer-div">
                <input
                  type="radio"
                  name="books"
                  value={questions[3].answers[answerIndex]}
                  checked={quizAnswers.get(3) === answerIndex}
                  onChange={() => handleChange(3, answerIndex)}
                />
                <span>{questions[3].answers[answerIndex]}</span>
              </div>
            );
          })}
        </div>
      ) : null}

      {/* {questions.map((item, questionIndex) => {
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
      })} */}
      <button className="btn btn-quiz" onClick={handleSendBtn}>
        Send
      </button>
    </div>
  );
}

export default Quiz;
