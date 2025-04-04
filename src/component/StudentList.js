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
    <div>
      <h1>Stduent List</h1>
      {studentData && (
        <div>
          {Object.entries(studentData).map(([key, value]) => {
            return (
              <div key={key}>
                <p>{value.studentName} {value.phone}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StudentList;
