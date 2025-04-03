import React from 'react'
import { getDatabase,ref,set } from 'firebase/database'
import {app} from '../Firebase'
const AddData = () => {
const addData =(userId,name,phone)=>{
    const db =getDatabase(app);
    set(ref(db,'student/'+userId),{
        studentName: name,
        phone:phone

    })
}
  return (
    <div>
      <h1>Add Data DEMO</h1>
      <button onClick={()=>{addData(123,'Nikesh',1589148)}}>Add Demo Data</button>
    </div>
  )
}

export default AddData
