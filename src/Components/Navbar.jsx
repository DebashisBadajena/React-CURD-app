import { Link } from 'react-router-dom'
import React from 'react'
import style from "./components.module.css"

const Navbar = () => {
  return (
    <div className={style.nav}>

        <Link to={"/"}>User</Link>
        <Link to={"/createUser"}>Create User</Link>


    </div>
  )
}

export default Navbar