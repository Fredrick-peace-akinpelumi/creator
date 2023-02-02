import React from 'react'
import { useCookies } from "react-cookie";
import Router, { useRouter } from "next/router";


const Logout = () => {
    const useroute=useRouter()
    const [cookies,,removecookies]=useCookies(["currentUser"])
    const logout=()=>{
        useroute.push("/")
        removecookies("currentUser")
    }
  return (
    <div className='position-fixed top-0'>
        <button className='btn text-danger btn-lg' onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout