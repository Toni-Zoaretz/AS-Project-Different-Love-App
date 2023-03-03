import { useState, createContext, useContext } from "react";
import { questions } from "../questions";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState("");
  const [newUser, setNewUser] = useState({});
  const [quizAnswers, setQuizAnswers] = useState(questions.map((item) => ""));
  const [userQuizAnswers, setUserQuizAnswers] = useState([]);
  const [reloadUsersCounter, setReloadUsersCounter] = useState(0);

  return (
    <AppContext.Provider
      value={{
        newUser,
        setNewUser,
        quizAnswers,
        setQuizAnswers,
        userQuizAnswers,
        setUserQuizAnswers,
        activeUser,
        setActiveUser,
        reloadUsersCounter,
        setReloadUsersCounter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
