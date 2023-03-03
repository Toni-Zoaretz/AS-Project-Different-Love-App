import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/context";
import { questionsBySlug } from "../questions";

import api from "../api";

import { BsFlower1 } from "react-icons/bs";

function CardsPage() {
  const { activeUser } = useGlobalContext();
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    activeUser.toString();
    const getData = async () => {
      try {
        let respond = await api.get("/users");
        setUsersData(respond.data);
      } catch (error) {
        console.log("ERROR!");
      }
    };
    getData();
  }, [activeUser]);

  return (
    <div className="page cards-page">
      CardsPage
      {usersData?.map((item, index) => {
        return (
          <div key={index} className="card">
            <div>
              <BsFlower1 className="icon" />
            </div>
            <div className="card-items">{item.fullName}</div>
            <div className="card-items">{item.age}</div>
            <div className="card-items">{item.gender}</div>
            <div className="card-items">{item.status}</div>
            <div className="card-items">{item.smoking}</div>
            <div className="card-items">
              {item.trivia?.map((q) => (
                <i>
                  {questionsBySlug[q].title}: {questionsBySlug[q].correctAnswer}
                </i>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardsPage;
