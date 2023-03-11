import React from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { MdOutlineCheckCircle } from "react-icons/md";
import img1 from "../assets/undraw_intense_feeling_ft9s.png";
import { AiOutlineGoogle } from "react-icons/ai";
import {} from "react-icons/ai";
function Home() {
  const userStuff = useCurrentUser();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (userStuff.state === "USER_NEED_PROFILE") {
      navigate("/register");
      return;
    }

    if (userStuff.state === "USER_NEED_TRIVIA") {
      navigate("/userHobbies");
      return;
    }

    if (userStuff.state === "READY") {
      navigate("/allUsers");
      return;
    }
  }, [userStuff.state, navigate]);

  return (
    <div className="page home-page">
      {userStuff.state === "LOADING_USER_DATA" ||
      userStuff.state === "AUTH_LOADING" ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="home-info">
            <h1>
              <p className="home-title">
                WELCOME TO A DIFFERENT {userStuff.state}
              </p>
              <p>LOVE APP</p>
            </h1>
            <span>
              <img className="woman-img" src={img1} alt="woman" />
            </span>
          </div>
          <div className="app-steps">
            <ul>
              <p className="app-steps-title">App steps:</p>
              <li>
                <span>
                  <MdOutlineCheckCircle className="icon-home-page" />
                </span>
                You need to sign in with Google with the button below.
              </li>
              <li>
                <span>
                  <MdOutlineCheckCircle className="icon-home-page" />
                </span>
                You will then be taken to your card creation page where you can
                fill in details about yourself that will be available to
                everyone in the app.
              </li>
              <li>
                <span>
                  <MdOutlineCheckCircle className="icon-home-page" />
                </span>
                Then you will forward to the Hobbies page where you have to
                choose multiple hobbies that you like (you can choose them all
                also) and press continue button bellow.
              </li>
              <li>
                <span>
                  <MdOutlineCheckCircle className="icon-home-page" />
                </span>
                Then you'll be asked to answer small quiz that we prepared for
                each hobby you choose, don't worry there is no grade at the end.
              </li>
              <li>
                <span>
                  <MdOutlineCheckCircle className="icon-home-page" />
                </span>
                After you finish the quiz, we will generate a card for you that
                contains all the details you filled out in the main form and the
                topics of the quiz test you passed. for example if you marked
                that you like Jazz Music and pass the Jazz Music quiz, the hobby
                topic will appear on you card.
              </li>
              <li>
                <span>
                  <MdOutlineCheckCircle className="icon-home-page" />
                </span>
                If you did not answer the test correctly, we will not tell
                anyone, don't worry, your secret will be kept with us
              </li>
              <li>
                <span>
                  <MdOutlineCheckCircle className="icon-home-page" />
                </span>
                Then you will move to the cards page where all users cards are.
                you be able to edit your card information and also delete your
                card.
              </li>
              <li>
                <span>
                  <MdOutlineCheckCircle className="icon-home-page" />
                </span>
                You can then choose with who you want to chat based on their
                hobbies only and press the Chat button that will take you to a
                chat with all the users for now.
              </li>
              <li>
                <span>
                  <MdOutlineCheckCircle className="icon-home-page" />
                </span>
                You can Log Out once you finished.
              </li>
            </ul>
            <div className="lets-start-btn-container">
              <span className="app-steps-title">OPEN YOUR HEART!</span>
              <button className="btn" onClick={userStuff.signIn}>
                Sign in with Google!
                <AiOutlineGoogle className="google-icon" />
              </button>
              {/* {userStuff.state === "LOADING_USER_DATA" ? "loading" : "" } */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default Home;
