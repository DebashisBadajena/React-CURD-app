import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from "./components.module.css"


const EditUser = () => {
    let[name,setName]=useState("")
    let[company,setCompany]=useState("")
    let[salary,setSalary]=useState("")
    let nav=useNavigate()
  let {index}=useParams();
    console.log(index);
  useEffect(()=>{
      axios.get(`http://localhost:3000/users/${index}`).then((res)=>{
        console.log(res);
          setName(res.data.name)
          setCompany(res.data.company)
          setSalary(res.data.salary)
    })
  },[])


  let getName=(e)=>{
      setName(e.target.value)
  }
  let getSalary=(e)=>{
    setSalary(e.target.value)

  }
  let getCompany=(e)=>{
    setCompany(e.target.value)

  }

const editUser=()=>{
  let payload={name,salary,company}
      axios.put(`http://localhost:3000/users/${index}`,payload).then(()=>{
        nav("/")
      })
}

  return (
    <div className={style.updateUser}>
            <h1>Update User</h1>
        <div>
            <div><label htmlFor="">Name :</label><input type="text" value={name} onChange={getName}/></div>
            <div><label htmlFor="">Salary :</label><input type="number" value={salary} onChange={getSalary}/></div>
            <div><label htmlFor="">Company :</label><input type="text" value={company} onChange={getCompany} /></div>
                <button className={style.btnShadow} onClick={editUser}>Update</button>
        </div>
    </div>
  )
}

export default EditUser