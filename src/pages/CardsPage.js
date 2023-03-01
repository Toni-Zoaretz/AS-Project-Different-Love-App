import { useEffect, useState } from "react";
import api from "../api";
import { BsFlower1 } from "react-icons/bs";
function CardsPage() {
  const [usersData, setUsersData] = useState("");
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
  }, []);

  return (
    <div className="page">
      CardsPage
      {usersData.map((item, index) => {
        return (
          <div key={index} className="card">
            <BsFlower1 />
            <div className="card-items">
              {item.fullName}
              {item.age}
              {item.gender}
              {item.status}
              {item.smoking}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardsPage;
