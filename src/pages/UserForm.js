import React, { useState } from "react";
import { useGlobalContext } from "../context/context";
import api from "../api";
function UserForm() {
  const { reloadUsersCounter, setReloadUsersCounter } = useGlobalContext();
  const { activeUser, setActiveUser } = useGlobalContext();
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    status: "",
    smoking: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const newUserDataFromServer = await api.post("/users", formData);
      setActiveUser(newUserDataFromServer.data.id);
      setReloadUsersCounter((c) => (c += 1));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="page wrapper">
      UserForm
      <form className="form" onSubmit={handleSubmit}>
        <h2>WELCOME</h2>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          placeholder="Full Name"
          onChange={handleChange}
        ></input>
        <input
          type="number"
          name="age"
          value={formData.age}
          placeholder="Age"
          onChange={handleChange}
        ></input>
        <select name="gender" onChange={handleChange} value={formData.gender}>
          <option>Gander</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <input
          type="text"
          name="status"
          value={formData.status}
          placeholder="Status (single,divorce etc)"
          onChange={handleChange}
        ></input>
        <select name="smoking" onChange={handleChange} value={formData.smoking}>
          <option>Smoking</option>
          <option>Yes</option>
          <option>No</option>
          <option>In Special Occasions</option>
        </select>
        <button className="btn" type="submit" disabled={!!activeUser}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;
