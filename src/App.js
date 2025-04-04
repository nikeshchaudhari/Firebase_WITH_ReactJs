import React from 'react'
import AddData from './component/AddData'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './component/Dashboard'
import AddStudent from './component/AddStudent'
import StudentList from './component/StudentList'
const myRouter =createBrowserRouter([
  {path:"",Component:Dashboard,children:[
    {path:'',Component:AddStudent},
    {path:'addstudent',Component:AddStudent},
    {path:'studentlist',Component:StudentList},
  ]},
  
])
const App = () => {
  return (
    <div>
      <RouterProvider router={myRouter} ></RouterProvider>
    </div>
  )
}

export default App
