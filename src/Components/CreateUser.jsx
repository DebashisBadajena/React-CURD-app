import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import style from "./components.module.css"

const CreateUser = () => {

    let[name,setName]=useState("");
    let[salary,setSalary]=useState("");
    let[company,setCompany]=useState("");
    let nav=useNavigate()
    const getName=(e)=>{
        setName(e.target.value)
    }
    const getSalary=(e)=>{
        setSalary(e.target.value)
    }
    const getCompany=(e)=>{
        setCompany(e.target.value)
    }
    

    const saveUser=()=>{
        let payload={name,salary,company}
        axios.post("http://localhost:3000/users",payload).then(()=>{
            console.log("USer saved sucessfully")
            nav("/")
        }).catch(()=>{
            console.log("error while storing data");
        })
    }

  return (
    <div className={style.createUser}>
        <div>
            <div><label htmlFor="">Name :</label><input type="text" value={name} onChange={getName}/></div>
            <div><label htmlFor="">Salary :</label><input type="number" value={salary} onChange={getSalary}/></div>
            <div><label htmlFor="">Company :</label><input type="text" value={company} onChange={getCompany} /></div>
                <button className={style.btnShadow} onClick={saveUser}>Submit</button>
        </div>
    </div>
  )
}

export default CreateUser