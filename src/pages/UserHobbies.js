import React from "react";
import { useGlobalContext } from "../context/context";

function UserHobbies() {
  const { handleHobbyBtn } = useGlobalContext();

  return (
    <div className="page user-buttons">
      UserHobbies
      <button className="btn" onClick={handleHobbyBtn} value="Jazz Music">
        Jazz Music
      </button>
      <button className="btn" onClick={handleHobbyBtn} value="Movies">
        Movies
      </button>
      <button className="btn" onClick={handleHobbyBtn} value="Foodie">
        Foodie
      </button>
      <button className="btn" onClick={handleHobbyBtn} value="Books">
        Books
      </button>
    </div>
  );
}

export default UserHobbies;
