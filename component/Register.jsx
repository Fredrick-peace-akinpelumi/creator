import React, { useState } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gif from "../public/loading.gif";
import Image from "next/image";
import Login from "./Login";
import { useCookies } from "react-cookie";
import { Footer } from "./Footer";

const Register = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loginemail, setloginemail] = useState();
  const [loginpassword, setloginpassword] = useState();
  const [confirmPass, setconfirmPass] = useState();
  const [state, setstate] = useState(true);
  const [loading, setloading] = useState(false);
  const [usersArr, setusersArr] = useState([]);
  const [cookies, setCookies] = useCookies(["currentUser"]);

  const register = () => {
    if (!email || !password || !confirmPass)
      return toast.warn("Fill all fields", {
        position: toast.POSITION.TOP_CENTER,
      });
    let users = { email, password, confirmPass };
    setusersArr((prev) => [...prev, users]);
    if (password !== confirmPass) {
      toast.warn("Confirm password must be same as password", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      setloading(true);
      axios
        .post("https://creator-zw9x.onrender.com/signup", users)
        .then((res) => {
          console.log(res);
          if (res.data.message && !res.data.status) {
            toast.success(res.data.message, {
              position: toast.POSITION.TOP_CENTER,
            });
          } else {
            Router.push("/Form");
            setCookies("currentUser", res.data.user, {
              path: "/",
              maxAge: 333333333,
              sameSite: true,
            });
          }
          setloading(false);
        })
        .catch((err) => {
            toast.error(err.message, { position: toast.POSITION.TOP_CENTER });
            setloading(false);
        });
    }
  };
  const login = () => {
    if (!loginemail || !loginpassword)
      return toast.warn("Fill all fields", {
        position: toast.POSITION.TOP_CENTER,
      });
    let loginUser = { loginemail, loginpassword };
    setloading(true);
    axios
      .post("https://creator-zw9x.onrender.com/login", loginUser)
      .then((res) => {
        if (res.data.message && !res.data.status) {
          toast.error(res.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          Router.push("/Form");
          setCookies("currentUser", res.data.user, {
            path: "/",
            maxAge: 333333333,
            sameSite: true,
          });
          toast.success(res.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        setloading(false);
      })
      .catch((err) => {
        toast.error(err.message, { position: toast.POSITION.TOP_CENTER });
        setloading(false);
      });
  };
  return (
    <>
      <ToastContainer />

      <div className=" container" >
        {state == true ? (
          <div className=" mt-5 p-5 col-lg-4 mx-auto" style={{backgroundColor:"#f2f2fc"}}>
            <div className="row">
              <h1>Register now</h1>
              <input
                className="form-control mb-3 p-3 shadow-sm border-0"
                onChange={(e) => setemail(e.target.value)}
                value={email}
                placeholder="Example@gmail.com"
                required
                type="email"
              />
              <input
                className="form-control mb-3 p-3 shadow-sm border-0"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                placeholder="Password"
                required
                type="password"
              />
              <input
                className="form-control mb-3 p-3 shadow-sm border-0"
                onChange={(e) => setconfirmPass(e.target.value)}
                value={confirmPass}
                placeholder="Confirm password"
                required
                type="password"
              />
              <button className="btn border-0" onClick={() => setstate(!state)}>
                Login here
              </button>
                <button
                  className="btn btn-primary w-100"
                  disabled= {loading}
                  onClick={() => register()}
                >
                <ClipLoader loading={loading} color="white" size={30} />
                  Create cv
                </button>
            </div>
          </div>
        ) : (
          <div className=" mt-5 p-5 col-lg-4 mx-auto" style={{backgroundColor:"#f2f2fc"}}>
            <div className="row">
              <h1>Welcome back</h1>
              <input
                className="form-control p-3 mb-3 shadow-sm border-0"
                onChange={(e) => setloginemail(e.target.value)}
                value={loginemail}
                placeholder="Example@gmail.com"
                required
                type="email"
              />
              <input
                className="form-control p-3 mb-3 shadow-sm border-0"
                onChange={(e) => setloginpassword(e.target.value)}
                value={loginpassword}
                placeholder="Password"
                required
                type="password"
              />
              <button className="btn border-0" onClick={() => setstate(!state)}>
                Create Account
              </button>

                <button
                  className="btn btn-primary w-100"
                  disabled= {loading}
                  onClick={() => login()}
                >
                <ClipLoader loading={loading} color="white" size={30} />
                  Login
                </button>
             
            </div>
          </div>
        )}

        <div className="col-lg-4 mt-1 alert mx-auto alert-info">
          
            <b className="text-primary">Dev CvCreator </b>is here for
            young and great developers looking for jobs, we are interested in
            helping you create a wonderful Curriculum vitae template to search
            for the job of your choice, Signup to create your CV
          
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Register;
