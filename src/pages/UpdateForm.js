import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { useNavigate } from "react-router-dom";

import api from "../api";

function UpdateForm() {
  const navigate = useNavigate();

  const { userId } = useParams();
  const { formData } = useGlobalContext();
  const [newUpdateFromData, setNewUpdateFromData] = useState([]);

  useEffect(() => {
    getFormDataForUpdateUser();
  }, []);

  const getFormDataForUpdateUser = async () => {
    try {
      let respond = await api.get(`/users/${userId}`);
      setNewUpdateFromData(respond.data);
    } catch (error) {
      console.log("ERROR!");
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewUpdateFromData({
      ...newUpdateFromData,
      [name]: value,
    });
    console.log(newUpdateFromData);
  };

  const updateUserForm = async (e, userId) => {
    e.preventDefault();
    try {
      const res = await api.put(`./users/${userId}`, {
        fullName: newUpdateFromData.fullName,
        age: newUpdateFromData.age,
        gender: newUpdateFromData.gender,
        status: newUpdateFromData.status,
        smoking: newUpdateFromData.smoking,
      });
      console.log(res.data);
      navigate("/allUsers");
    } catch (error) {
      console.log("ERROR", error);
    }
    // updateUserForm();
  };

  return (
    <div className="page wrapper user-form-page">
      <form className="form" onSubmit={(e) => updateUserForm(e, userId)}>
        <h2>UPDATE FORM</h2>
        <input
          type="text"
          name="fullName"
          value={newUpdateFromData.fullName}
          placeholder="Full Name"
          onChange={handleChange}
        ></input>
        <input
          type="number"
          name="age"
          value={newUpdateFromData.age}
          placeholder="Age"
          onChange={handleChange}
        ></input>
        <select
          name="gender"
          value={newUpdateFromData.gender}
          onChange={handleChange}
        >
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <input
          type="text"
          name="status"
          value={newUpdateFromData.status}
          placeholder="Status (single,divorce etc)"
          onChange={handleChange}
        ></input>
        <select
          name="smoking"
          value={newUpdateFromData.smoking}
          onChange={handleChange}
        >
          <option>Smoking</option>
          <option>Yes</option>
          <option>No</option>
          <option>In Special Occasions</option>
        </select>
        <button className="btn" type="submit">
          Send Update
        </button>
      </form>
    </div>
  );
}

export default UpdateForm;
