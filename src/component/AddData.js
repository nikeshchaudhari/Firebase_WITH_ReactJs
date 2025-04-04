import React from 'react'
import {app} from '../Firebase'
import { getDatabase,ref,set } from 'firebase/database'
const AddData = () => {
const addData =(userId,name,phone)=>{
const db= getDatabase(app)
set(ref(db,'student/'+userId),{
  studntName:name,
  phone:phone
})
}


  return (
    <div>
      <h1>Add Data DEMO</h1>
      <button onClick={()=>{addData(456,"Aman",457788)}}>Add Demo Data</button>
    </div>
  )
}

export default AddData
