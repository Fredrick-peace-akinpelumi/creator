import  useRouter from 'next/router'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Head from 'next/head'

let router = useRouter
const Form = () => {

    <Head>
        <title>Cv creator</title>
    </Head>
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [phone_no, setphone_no] = useState("")
    const [email, setemail] = useState("")
    const [address, setaddress] = useState("")
    const [profile, setprofile] = useState("")
    const [compName, setcompName] = useState("")
    const [workRole, setworkRole] = useState("")
    const [workYear, setworkYear] = useState("")
    const [schoolName, setschoolName] = useState("")
    const [from, setfrom] = useState("")
    const [to, setto] = useState("")
    const [degree, setdegree] = useState("")
    const [hobby, sethobby] = useState("")
    const [skills, setskills] = useState("")
    const [desc, setdesc] = useState("")
    const [message, setmessage] = useState("")
    const [expArray, setexpArray] = useState(undefined)
    const [eduArray, seteduArray] = useState(undefined)
    const [hobbyArray, sethobbyArray] = useState(undefined)
    const [skillsArray, setskillsArray] = useState(undefined)
    const [createCvArray, setcreateCvArray] = useState({})
    
    const experience =(exp)=>{
        if (!compName || !workYear || !workRole) return setmessage("Please input work experience");
        setexpArray(prev=>
            {
                if (expArray!=undefined) {
                    return [...prev, exp]
                }else{
                    return [exp]
                }
            })
        setmessage("")
        setcompName("")
        setworkYear("")
        setworkRole("")

    }
    const education=(edu)=>{
        if (!schoolName || !from || !to || !degree) return setmessage("Please input education certificate");
        seteduArray(prev=>
            {
                if(eduArray!=undefined ){

                   return [...prev,edu]
                }else{
                    return [edu]
                }
            })
        setmessage("")
        setschoolName("")
        setfrom("")
        setto("")
        setdegree("")
    }
    const addHobby=(hob)=>{
        if(!hobby) return setmessage("Please input your Hobby")
        sethobbyArray(prev=>{
                if(hobbyArray!=undefined ){

                   return [...prev,hob]
                }else{
                    return [hob]
                }
        })
        setmessage("")
        sethobby("")
    }
    const addSkills=(skill)=>{
        if(!skills) return setmessage("Please input your stacks and skills")
        setskillsArray(prev=>{
            if (skillsArray!=undefined) {
                return [...prev, skill]
            }else{
                return [skill]
            }
        })
        setmessage("")
        setskills("")
    }

    const createCv=(setexpArray)=>{
        if (!firstName || !lastName || !address || !email || !phone_no || !profile|| !expArray|| !eduArray || !hobbyArray|| !skillsArray || !desc) return setmessage("Please input nesseccary details");
        let userDetails = {firstName, lastName, desc, address, email, phone_no, profile, experience:expArray,education:eduArray,hobby:hobbyArray,skills:skillsArray};

        setcreateCvArray((prev)=>{
           localStorage.fullDetails =JSON.stringify(userDetails)
           return userDetails
        })
        setmessage("")
        setfirstName("")
        setlastName("")
        setaddress("")
        setemail("")
        setphone_no("")
        setprofile("")
        setdesc("")
        setmessage("Cv template created successfully viewCV to see your CV")
    }

    const viewCv =()=>{
        if (!firstName || !lastName || !address || !email || !phone_no || !profile|| !expArray|| !eduArray || !hobbyArray|| !skillsArray || !desc) return setmessage("Please input nesseccary details");
        router.push('/template')
        setmessage("")
    }

  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 shadow p-4">  
                    <h1>Dev Cv creator</h1>
                    {
                 message.length>0&&<p className='alert alert-danger text-success' >{message}</p>
                    }
                <div className="d-flex col-12">
                    <div className="form-floating col-6">
        <input type="text" className='form-control mb-3 shadow-sm border-0 p-3' placeholder='First Name' onChange={(e)=>setfirstName(e.target.value)} value={firstName}/>
        <label htmlFor="">First Name</label>
                    </div>
                    <div className="form-floating col-6">
        <input type="text" className='form-control mb-3 shadow-sm border-0 p-3' placeholder='Last Name' onChange={(e)=>setlastName(e.target.value)} value={lastName}/>
        <label htmlFor="" className='ms-3'>Last Name</label>
                    </div>
                </div>

                <div className="d-flex">
                <div className="form-floating col-6">
        <input type="number" className='form-control  mb-3 shadow-sm border-0 p-3' placeholder='Phone Number' onChange={(e)=>setphone_no(e.target.value)} value={phone_no}/>
        <label htmlFor="">Phone Number</label>
                </div>
                <div className="form-floating col-6">
        <input type="email" className='form-control  mb-3 shadow-sm border-0 p-3' placeholder='Email' onChange={(e)=>setemail(e.target.value)} value={email}/>
        <label htmlFor="">Email</label>
                </div>
                </div>
                <div className="form-floating">
        <input type="text" className='form-control mb-3 shadow-sm border-0 p-3' placeholder='Address' onChange={(e)=>setaddress(e.target.value)} value={address}/>
        <label htmlFor="">Address</label>
                </div>
                <div className="form-floating">
        {/* new array start from here */}
        <input type="text"  onChange={(e)=>setprofile(e.target.value)} value={profile} className='mx-auto form-control mb-3' placeholder='Profile Desc'/>
        <label htmlFor="">Profile Desc</label>
                </div>
                <label htmlFor="">Please describe yourself in full</label>
                <div className="form-floating">
        <textarea name="" id="" cols="30" rows="10" onChange={(e)=>setdesc(e.target.value)} value={desc} placeholder='Full self description' className='mx-auto form-control md-textarea mb-2'></textarea>
        <label htmlFor="">Full self description</label>
                </div>

                    <label htmlFor="">Experience</label>
                <div className="d-flex flex-wrap justify-content-around col-12">
                    <div className="form-floating col-6">
        <input type="text" className='form-control mb-3 shadow-sm border-0 p-3' placeholder='Companies name' onChange={(e)=>setcompName(e.target.value)} value={compName}/>
        <label htmlFor="">Companies name</label>
                    </div>
                    <div className="form-floating col-6">
                            <select name="" id="" className='form-control mb-3 shadow-sm border-0 p-3' onChange={(e)=>setworkYear(e.target.value)} >
                            <option value="">Year of experience</option>
                            <option value="1 year">1 Years</option>
                            <option value="2 Years">2 Years</option>
                            <option value="3 Years">3 Years</option>
                            <option value="4 Years">4 Years</option>
                            <option value="5 Years">5 Years</option>
                            <option value="6 Years">6 Years</option>
                            <option value="7 Years">7 Years</option>
                            <option value="8 Years">8 Years</option>
                            <option value="9 Years">9 Years</option>
                            <option value="10 Years">10 Years</option>
                            </select>
        {/* <input type="" className='form-control mb-3 shadow-sm border-0 p-3' placeholder='date'/> */}
        {/* <label htmlFor="">date</label> */}
                    </div>
                    <div className="form-floating col-6">
        <input type="text" className='form-control ms-3 mb-3 shadow-sm border-0 p-3' placeholder='Role' onChange={(e)=>setworkRole(e.target.value)} value={workRole}/>
        <label htmlFor="" className='ms-3'>Role</label>
                    </div>
                    <button className='btn btn-primary fs-4 m-auto' onClick={()=>experience({compName,workYear,workRole})}>+</button>
                </div>


                    <label htmlFor="">Education</label>
                <div className="d-flex flex-wrap justify-content-between col-12">
                    <div className="form-floating col-6">
        <input type="text" className='form-control mb-3 shadow-sm border-0 p-3' placeholder='School' onChange={(e)=>setschoolName(e.target.value)} value={schoolName}/>
        <label htmlFor="">School name</label>
                    </div>
                    <div className="form-floating col-4">
        <input type="date" className='form-control mb-3 shadow-sm border-0 p-3' placeholder='date' onChange={(e)=>setfrom(e.target.value)} value={from}/>
        <label htmlFor="">From</label>
                    </div>
                    <div className="form-floating col-4">
        <input type="date" className='form-control mb-3 shadow-sm border-0 p-3' placeholder='date' onChange={(e)=>setto(e.target.value)} value={to}/>
        <label htmlFor="">To</label>
                    </div>
                    <div className="form-floating col-6">
                            <select name="" id="" className='form-control mb-3 shadow-sm border-0 p-3' onChange={(e)=>setdegree(e.target.value)} value={degree} >
                            <option value="">Certificate gained</option>
                            <option value="BSC">BSC</option>
                            <option value="HND">HND</option>
                            <option value="NID">NID</option>
                            <option value="ND">ND</option>
                            <option value="Sce">SCE</option>
                            <option value="In review">In review</option>
                            </select>
                    </div>
                   
                    <button className='btn btn-primary fs-4  m-auto' onClick={()=>education({schoolName, from, to, degree})}>+</button>
                </div>


    <label htmlFor="">Please add multiple options</label>
                <div className="form-floating d-flex">
        <input type="text" className='form-control  mb-3 shadow-sm border-0 p-3' placeholder='Hobbies' onChange={(e)=>sethobby(e.target.value)} value={hobby}/>
        <label htmlFor="" className='ms-3'>Hobbies</label>
        <button className='btn btn-primary fs-4 m-auto ms-2' onClick={()=>addHobby({hobby})}>+</button>
                    </div>
                    <label htmlFor="">Please add multiple options</label>
                <div className="form-floating d-flex">
        <input type="text" className='form-control  mb-3 shadow-sm border-0 p-3' placeholder='Skills/Stacks' onChange={(e)=>setskills(e.target.value)} value={skills}/>
        <label htmlFor="" className='ms-3'>Skills/Stacks</label>
        <button className='btn btn-primary fs-4 m-auto ms-2' onClick={()=>addSkills({skills})}>+</button>
                    </div>

        <button className='btn btn-outline-success mx-auto' onClick={()=>createCv()}>Create Cv</button>
        <button className='btn btn-info ms-3 mx-auto' onClick={()=>viewCv()}>View Cv</button>
            </div>
            <div className="col-6">
        <Image className='d-lg-block d-none' src='/create.png' alt="" width="1000" height="1000" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Form