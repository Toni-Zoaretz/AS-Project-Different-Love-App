import React from "react";

function UserForm() {
  return (
    <div className="page wrapper">
      UserForm
      <form className="form">
        <h2>WELCOME</h2>
        <input
          type="text"
          name="fullName"
          // value={email}
          placeholder="Full Name"
          // onChange={handleChange}
        ></input>
        <input
          type="number"
          name="age"
          // value={password}
          placeholder="Age"
          // onChange={handleChange}
        ></input>
        <input
          type="text"
          name="gender"
          // value={password}
          placeholder="Gender"
          // onChange={handleChange}
        ></input>
        <input
          type="text"
          name="text"
          // value={password}
          placeholder="Status (single,divorce etc)"
          // onChange={handleChange}
        ></input>
        <input
          type="text"
          name="text"
          // value={password}
          placeholder="Smoking"
          // onChange={handleChange}
        ></input>
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default UserForm;
