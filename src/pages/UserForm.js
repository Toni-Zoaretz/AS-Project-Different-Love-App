import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../hooks/useCurrentUser";
function UserForm() {
  const userStuff = useCurrentUser();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
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

  const formValidation = () => {
    if (
      formData.fullName === "" ||
      formData.age === "" ||
      formData.gender === "" ||
      formData.smoking === "" ||
      formData.status === ""
    ) {
      setMessage("Some Fields Are Empty");
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formValidation()) {
      return;
    }
    try {
      await userStuff.updateUser({
        ...formData,
        email: userStuff.userAuthData.email,
      });

      navigate("/userHobbies");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="page wrapper user-form-page">
      <form className="form" onSubmit={handleSubmit}>
        <h2>YOUR CARD INFO</h2>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          placeholder="Full Name / Nickname"
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
          <option>Gender</option>
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
        <button
          className="btn"
          type="submit"
          disabled={!userStuff.userAuthData?.uid}
        >
          Submit
        </button>
        <p className="user-message">{message}</p>
      </form>
    </div>
  );
}

export default UserForm;
