import React, { useState } from "react";
import "../style.css";
import { getDatabase, ref, set } from "firebase/database";
import { useLocation, useNavigate } from "react-router-dom";
import {app} from "../Firebase"
const UpdateStudent = () => {

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  
  const [name, setname] = useState(location.state[1].studentName);
  const [phone, setphone] = useState(location.state[1].phone);
  const [addmission, setaddmission] = useState(location.state[0]);

  

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
          disabled value={addmission}onChange={(e) => {
            setaddmission(e.target.value);
          }}
          type="text"
          placeholder="Admission No"
        />
        <br></br>
        <br></br>
        <label>Name : </label>
        <input
         value={name} onChange={(e) => {
            setname(e.target.value);
          }}
          type="text"
          placeholder="Student Name"
        />
        <br></br>
        <br></br>
        <label>Phone Number : </label>
        <input
          value={phone}onChange={(e) => {
            setphone(e.target.value);
          }}
          type="number"
          placeholder="Phone Number"
        />
        <br></br>
        <br></br>
        <button  onClick={()=>{
          navigate('/studentlist')
        }}type="submit">Update Data</button>
      </form>
    </div>
  );
};

export default UpdateStudent;
