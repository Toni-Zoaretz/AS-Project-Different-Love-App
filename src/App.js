import "./App.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
// import { Test } from "./pages/Test";
import UserForm from "./pages/UserForm";
import UserHobbies from "./pages/UserHobbies";
import Quiz from "./pages/Quiz";
import CardsPage from "./pages/CardsPage";
import ChatPage from "./pages/ChatPage";
import UpdateForm from "./pages/UpdateForm";
function App() {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Test />,
    // },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: <UserForm />,
    },
    {
      path: "/userHobbies",
      element: <UserHobbies />,
    },
    {
      path: "/quiz",
      element: <Quiz />,
    },
    {
      path: "/allUsers",
      element: <CardsPage />,
    },
    {
      path: "/chat",
      element: <ChatPage />,
    },
    {
      path: "/updateForm/:userId",
      element: <UpdateForm />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
