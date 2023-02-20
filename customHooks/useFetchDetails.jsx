import axios from 'axios'
import React ,{useState,useEffect}from 'react'
import {useCookies} from "react-cookie"
import Router, { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";


const useFetchDetails = () => {
  const useroute=useRouter()
  const [cookies,setCookie]=useCookies(["currentUser"])
  const [first, setfirst] = useState(undefined)

  useEffect(()=>{
    fetch()
  },[])

    const fetch=()=>{
      if(!cookies?.currentUser){
        useroute.push("/")
      }else{
        axios.get("https://creator-zw9x.onrender.com/",{id:cookies.currentUser}).then((value)=>{
          if(value.data.messsage&& !value.data.status){
            toast.error(value.data.message, { position: toast.POSITION.TOP_CENTER });
          }else{
            setfirst(value.data.value)
            console.log(value.data.value)
          }
        }).catch((err)=>{
          toast.error(err, { position: toast.POSITION.TOP_CENTER })
        })
      }
    }
    return ([first,])
}

export default useFetchDetails