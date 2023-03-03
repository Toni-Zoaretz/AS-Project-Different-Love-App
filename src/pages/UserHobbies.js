import React from "react";

function UserHobbies() {
  const handleHobbyBtn = (e) => {
    console.log(e.target.value);
  };
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
