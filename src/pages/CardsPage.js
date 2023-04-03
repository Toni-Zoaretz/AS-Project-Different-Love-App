import femaleImg from "../assets/female_avatar.png";
import maleImg from "../assets/male_avatar.png";
import { useNavigate } from "react-router-dom";
import { questionsById } from "../questions";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { collection, query, where } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import { useCurrentUser } from "../hooks/useCurrentUser";

function CardsPage() {
  const userStuff = useCurrentUser();
  const navigate = useNavigate();
  const [filterGender, setFilterGender] = useState();

  const filtersWheres = [];

  if (filterGender) {
    filtersWheres.push(where("gender", "==", filterGender));
  }

  const [usersListWithMetadata] = useCollection(
    query(collection(db, "users"), ...filtersWheres)
  );

  const usersList = usersListWithMetadata?.docs.map((d) => ({
    ...d.data(),
    id: d.id,
  }));

  const handleRemoveUserBtn = async (userId) => {
    try {
      await deleteDoc(doc(db, "users", userId));
    } catch (error) {
      console.log("ERROR!");
    }
  };

  const handleChatBtn = () => {
    navigate("/chat");
  };

  return (
    <div className="page cards-page">
      <div className="hobbies-title-div container-users-title">
        <h2 className="users-title">ALL USERS</h2>
        <span>Filter:</span>
        <select
          name="gender"
          value={filterGender ?? "All"}
          onChange={(e) =>
            setFilterGender(
              e.target.value === "All" ? undefined : e.target.value
            )
          }
        >
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="cards-container">
        {usersList?.map((item, index) => {
          return (
            <div key={index} className="card">
              <div>
                {item.gender === "Male" ? (
                  <img src={maleImg} alt="male" className="icon" />
                ) : (
                  <img src={femaleImg} alt="female" className="icon" />
                )}
              </div>
              <div className="cards-items-container">
                <div className="card-items card-title">Personal Details:</div>
                <div className="card-items">{item.fullName}</div>
                <div className="card-items">{item.age}</div>
                <div className="card-items">{item.gender}</div>
                <div className="card-items">{item.status}</div>
                <div className="card-items">Smoking: {item.smoking}</div>
                <div className="card-items card-title">Hobbies:</div>
                <div className="card-items hobbies-answers ">
                  {item.trivia?.map((q) => (
                    <p>{questionsById[q].subject}</p>
                  ))}
                </div>
              </div>
              {item.id === userStuff.userAuthData.uid ? (
                <>
                  <button
                    className="card-btn"
                    onClick={() =>
                      handleRemoveUserBtn(userStuff.userAuthData.uid)
                    }
                  >
                    REMOVE USER
                  </button>

                  <Link
                    to={`/updateForm/${item.id}`}
                    className="card-btn edit-btn"
                  >
                    EDIT PERSONAL DETAILS
                  </Link>
                </>
              ) : (
                <button className="card-btn chat-btn" onClick={handleChatBtn}>
                  CHAT
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardsPage;
