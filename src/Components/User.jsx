import React, { useEffect,useState } from 'react'
import style from "./components.module.css"
import { Link } from 'react-router-dom'
import axios from 'axios'

const User = () => {
    
    let[data,setData]=useState([]);
   

    useEffect(()=>{
        axios.get("http://localhost:3000/users").then((res)=>{
            setData(res.data)
        })
    },[])

    const delteUser=(id)=>{
        axios.delete(`http://localhost:3000/users/${id}`).then(()=>{
            console.log("user deleted");
            window.location.assign("/")
        })
    }
  return (
    <div className={style.user}>
        
        {data.map((user)=>{
            return(
                <div className={style.card} key={user.id}>
               <div> <p>Name :</p><h3>{user.name}</h3></div>
               <div> <p>Salary :</p><h3>{user.salary}</h3></div>
               <div> <p>Company :</p><h3>{user.company}</h3></div>

                <div className={style.btn}>
                    <Link to={`/edituser/${user.id}`} className={style.btnShadow}>Edit</Link>
                    <button onClick={()=>{delteUser(user.id)}} className={style.btnShadow}>Delete</button>
                </div>
                </div>
        

            )


        })}
       
    </div>
  )
}

export default User