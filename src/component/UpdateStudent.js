import React, { useState } from "react";
import "../style.css";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import {app} from "../Firebase"
const UpdateStudent = () => {
  const [name, setname] = useState();
  const [phone, setphone] = useState();
  const [addmission, setaddmission] = useState();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const db = getDatabase(app);
    set(ref(db, "student/" + addmission), {
      studentName: name,
      phone: phone,
    })
      .then((res) => {
        navigate("/updatestudent");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={submitHandler}>
        <label>Admission No. : </label>
        <input
          onChange={(e) => {
            setaddmission(e.target.value);
          }}
          type="text"
          placeholder="Admission No"
        />
        <br></br>
        <br></br>
        <label>Name : </label>
        <input
          onChange={(e) => {
            setname(e.target.value);
          }}
          type="text"
          placeholder="Student Name"
        />
        <br></br>
        <br></br>
        <label>Phone Number : </label>
        <input
          onChange={(e) => {
            setphone(e.target.value);
          }}
          type="number"
          placeholder="Phone Number"
        />
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateStudent;
