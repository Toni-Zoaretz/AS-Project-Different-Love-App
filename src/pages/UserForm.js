import React, { useState } from "react";

function UserForm() {
  // const [fullName, setFullName] = useState("");
  // const [age, setAge] = useState("");
  // const [gender, setGender] = useState("");
  // const [status, setstatus] = useState("");
  // const [isSmoking, setIsSmoking] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    status: "",
    smoking: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default UserForm;
