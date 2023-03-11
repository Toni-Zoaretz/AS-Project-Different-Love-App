import { useState, createContext, useContext } from "react";
import { questions } from "../questions";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState("");
  const [newUser, setNewUser] = useState({});
  const [quizAnswers, setQuizAnswers] = useState(questions.map((item) => ""));
  const [userQuizAnswers, setUserQuizAnswers] = useState([]);
  const [reloadUsersCounter, setReloadUsersCounter] = useState(0);
  const [jazzMusicHobby, setJazzMusicHobby] = useState(false);
  const [moviesHobby, setMoviesHobby] = useState(false);
  const [foodieHobby, setFoodieHobby] = useState(false);
  const [booksHobby, setBooksHobby] = useState(false);
  const [styleJazzBtn, setStyleJazzBtn] = useState(false);
  const [styleMovies, setStyleMovies] = useState(false);
  const [styleFoodie, setStyleFoodie] = useState(false);
  const [styleBooks, setStyleBooks] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    status: "",
    smoking: "",
  });

  const handleHobbyBtn = (e) => {
    if (e.target.value === "Jazz Music") {
      setJazzMusicHobby(true);
      setStyleJazzBtn(!styleJazzBtn);
    }
    if (e.target.value === "Movies") {
      setMoviesHobby(true);
      setStyleMovies(!styleMovies);
    }
    if (e.target.value === "Foodie") {
      setFoodieHobby(true);
      setStyleFoodie(!styleFoodie);
    }
    if (e.target.value === "Books") {
      setBooksHobby(true);
      setStyleBooks(!styleBooks);
    }
    console.log(e.target.value);
  };

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
        jazzMusicHobby,
        setJazzMusicHobby,
        moviesHobby,
        setMoviesHobby,
        foodieHobby,
        setFoodieHobby,
        booksHobby,
        setBooksHobby,
        handleHobbyBtn,
        formData,
        setFormData,
        styleJazzBtn,
        setStyleJazzBtn,
        styleBooks,
        setStyleBooks,
        styleMovies,
        setStyleMovies,
        styleFoodie,
        setStyleFoodie,
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
