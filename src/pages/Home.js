import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { MdOutlineCheckCircle } from "react-icons/md";
import img1 from "../assets/undraw_intense_feeling_ft9s.png";
function Home() {
  const [user] = useAuthState(auth);
  // usersList
  // user.email

  // users?email={userema}
  const navigate = useNavigate();

  if (user) {
  }

  const handleHomePageBtn = () => {
    navigate("/register");
    // googleSignIn();
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <div className="page home-page">
      <div className="home-info">
        <h1>
          <p className="home-title">WELCOME TO A DIFFERENT</p>
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
            You must fill out a registration form on the next page
          </li>
          <li>
            {" "}
            <span>
              <MdOutlineCheckCircle className="icon-home-page" />
            </span>
            You will then have to choose multiple hobbies that you like
          </li>
          <li>
            {" "}
            <span>
              <MdOutlineCheckCircle className="icon-home-page" />
            </span>
            Then you'll be asked to answer small quiz test that we prepared for
            each hobby you choose, don't worry there is no grade at the end.
          </li>
          <li>
            {" "}
            <span>
              <MdOutlineCheckCircle className="icon-home-page" />
            </span>
            After you finish the quiz, we will generate a card for you that
            contains all the details you filled out in the main form and the
            topics of the quiz test you passed. for example if you marked that
            you like Jazz Music and pass the Jazz Music quiz, the hobby topic
            will appear on you card.
          </li>
          <li>
            {" "}
            <span>
              <MdOutlineCheckCircle className="icon-home-page" />
            </span>
            If you did not answer the test correctly, we will not tell anyone,
            don't worry, your secret will be kept with us
          </li>
          <li>
            {" "}
            <span>
              <MdOutlineCheckCircle className="icon-home-page" />
            </span>
            Then you will move to the cards page where all users card are. you
            can find there all details and hobbies and also filter if you rather
            see mans or woman. bla bla bla
          </li>
          <li>
            {" "}
            <span>
              <MdOutlineCheckCircle className="icon-home-page" />
            </span>
            You can then choose with who you want to chat based on their hobbies
            only
          </li>
        </ul>
        <div className="lets-start-btn-container">
          <span className="app-steps-title">OPEN YOUR HEART!</span>
          <button className="btn" onClick={handleHomePageBtn}>
            Lets Start!
          </button>

          {/* 
          <h1>React Chat</h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </button> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
