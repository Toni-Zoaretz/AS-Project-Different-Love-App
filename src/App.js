import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import UserForm from "./pages/UserForm";
import UserHobbies from "./pages/UserHobbies";
import Quiz from "./pages/Quiz";
import CardsPage from "./pages/CardsPage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div>
      <Home />
      <UserForm />
      <UserHobbies />
      <Quiz />
      <CardsPage />
      <ChatPage />
    </div>
  );
}

export default App;
