import React, {useState} from 'react'
import Register from './Register'

const Index = () => {
    const [email, setemail] = useState()
    const [message, setmessage] = useState("")
    const [state, setstate] = useState(true)
    const [password, setpassword] = useState()

     const login =()=>{
      
     }
  return (
    <>
     {state==true ? <div className="shadow mt-5 p-5 col-lg-4">
            <div className="row">
                <h1>Welcome back</h1>
                { message!== "" ?<b className='alert alert-danger'>{message}</b> : ""}
            <input className='form-control mb-3 p-3 shadow-sm border-0' onChange={(e)=>setemail(e.target.value)} value={email} placeholder='Example@gmail.com' type="text" />
            <input className='form-control mb-3 p-3 shadow-sm border-0' onChange={(e)=>setpassword(e.target.value)} value={password} placeholder='Password' type="text" />
            <button className='btn' onClick={()=>setstate(!state)}>Create Account</button>
            <button className='btn btn-primary' onClick={()=>login()}>Login</button>
            </div>
        </div> :
        <Register/>
        }
    </>
  )
}

export default Index