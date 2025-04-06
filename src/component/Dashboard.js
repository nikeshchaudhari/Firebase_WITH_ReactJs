import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../style.css";
const Dashboard = () => {
  return (
    <div className="wrapper-dashboard">
      <div className="side-wrapper">
       <Link to = '/addstudent'style={{
        color:'white', display:'block',padding:'12px'
       }}>Add Student</Link>
       <Link to = '/studentlist'style={{
        color:'white', display:'block',padding:'12px'
       }}> Student List</Link>
      
      </div>
      <div> 
       <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
