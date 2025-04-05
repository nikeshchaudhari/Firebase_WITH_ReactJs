import React, { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { app } from "../Firebase";

const StudentList = () => {
  const [studentData, setStudentData] = useState(null);
  useEffect(() => {
    const db = getDatabase(app);
    const studentRef = ref(db, "student");
    onValue(studentRef, (snapshot) => {
      const data = snapshot.val();
      setStudentData(data);
    });
  }, []);
  return (
    <div className="std-list">
      <h1>Student List</h1>
      {studentData && (
        <div className="data-list">
          <table style={{ border: "1px solid black" }}>
            {Object.entries(studentData).map(([key, value]) => {
              return (
                <div key={key}>
                  <p>
                    {value.studentName} {value.phone}
                  </p>
                </div>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentList;
