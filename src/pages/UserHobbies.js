import React from "react";
import { useGlobalContext } from "../context/context";
import jazzImg from "../assets/jazz.png";
import moviesImg from "../assets/movies.png";
import foodieImg from "../assets/foodie.png";
import booksImg from "../assets/books.png";

function UserHobbies() {
  const { handleHobbyBtn } = useGlobalContext();

  return (
    <div className="page hobbies-page">
      <div className="hobbies-title-div">
        <h2>CHOOSE YOUR HOBBIES</h2>
      </div>
      <div className="hobbies-div">
        <div className="single-hobby">
          <img src={jazzImg} alt="jazz" className="jazz-img" />
          <button
            className="btn hobbies-btn hobbies-btn-jazz"
            onClick={handleHobbyBtn}
            value="Jazz Music"
          >
            Jazz Music
          </button>
        </div>

        <div className="single-hobby">
          <img src={moviesImg} alt="movies" className="movies-img" />
          <button
            className="btn hobbies-btn hobbies-btn-btn"
            onClick={handleHobbyBtn}
            value="Movies"
          >
            Movies
          </button>
        </div>

        <div className="single-hobby">
          <img src={foodieImg} alt="food" className="foodie-img" />
          <button
            className="btn hobbies-btn hobbies-btn-btn hobbies-btn-foodie"
            onClick={handleHobbyBtn}
            value="Foodie"
          >
            Foodie
          </button>
        </div>

        <div className="single-hobby">
          <img src={booksImg} alt="books" className="books-img" />
          <button
            className="btn hobbies-btn hobbies-btn-btn books-btn"
            onClick={handleHobbyBtn}
            value="Books"
          >
            Books
          </button>
        </div>
      </div>
      <div>
        <button className="btn">CONTINUE</button>
      </div>
    </div>
  );
}

export default UserHobbies;
