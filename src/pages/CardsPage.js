import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/context";

import api from "../api";
import { BsFlower1 } from "react-icons/bs";
function CardsPage() {
  const { newUser } = useGlobalContext();
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        let respond = await api.get("/users");
        setUsersData(respond.data);
      } catch (error) {
        console.log("ERROR!");
      }
    };
    getData();
  }, [usersData, newUser]);

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
          </div>
        );
      })}
    </div>
  );
}

export default CardsPage;
