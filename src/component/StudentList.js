import React, { useEffect, useState } from "react";
import { getDatabase, onValue, ref, remove } from "firebase/database";
import { app } from "../Firebase";
import { useNavigate } from "react-router-dom";

const StudentList = () => {
  const [studentData, setStudentData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const db = getDatabase(app);
    const studentRef = ref(db, "student");
    onValue(studentRef, (snapshot) => {
      const data = snapshot.val();
      setStudentData(data);
    });
  }, []);
  const deleteData = (key) => {
    const db = getDatabase(app);
    const studentRef = ref(db, "student/" + key);
    remove(studentRef);
  };
  return (
    <div className="std-list">
      <h1>Student List</h1>
      {studentData && (
        <div className="data-list">
          {Object.entries(studentData).map(([key, value]) => {
            return (
              <div key={key}>
                <p>
                  {value.studentName} {value.phone}
                </p>
                <button
                  onClick={() => {
                    deleteData(key);
                  }}
                >
                  Delete
                </button>
                <button onClick={()=>{navigate('/updatestudent',{state:[key,value]})}}>Update</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StudentList;
