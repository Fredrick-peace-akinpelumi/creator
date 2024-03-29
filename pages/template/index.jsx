import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
// import 'Home.module.css';
import { PulseLoader } from 'react-spinners';
import useFetchDetails from "../../customHooks/useFetchDetails";
import { Footer } from "../../component/Footer";
import { toast, ToastContainer } from "react-toastify";
// import '../../styles/global.css';

const Index = () => {
  const componentRef = useRef();
  const [userData] = useFetchDetails();
  if (!userData) {
    return(
        <div className='text-center mt-5'>
            <PulseLoader size={30} color="red"/>
        </div>
    )
    
}

  return (
    <>

      <ReactToPrint
        trigger={() => {
          return (
            <button className="btn btn-danger p-3 ms-4 mt-3">Print Cv</button>
          );
        }}
        content={() => componentRef.current}
        documentTitle="new document"
        pageStyle="print"
      />

      <div className="container " ref={componentRef}>
      <ToastContainer />
        <div className="row">
          <div
            className=" p-2 main"
            style={{ backgroundColor: "rgb(232,233,239)", width: "90vh" }}
          >
            <div className="d-flex">
              <div
                className=" col-lg-4 p-3 ms-2 text-white"
                style={{ backgroundColor: "blue" }}
              >
                <h2>Contact</h2>
                <hr />
                <p className="">Email address: {userData && userData.email}</p>
                <p>House Address: {userData && userData.address}</p>
                <p>Phone Number: {userData && userData.phone_no}</p>
                <hr />
                <div className="mt-3" style={{ lineHeight: "5px" }}>
                  <h2>Education</h2>
                  <hr />
                  {userData &&
                    userData?.education?.map((item, i) => (
                      <div key={i}>
                        <p>School Name: {item.schoolName}</p>
                        <p>
                          Duration: {item.from} 
                        </p>
                        <p>
                        - {item.to}
                        </p>
                        <p>Certificate Earned: {item.degree}</p>
                        <hr />
                      </div>
                    ))}
                </div>
                <ul className="mt-4" style={{ lineHeight: "3px" }}>
                  <h2>Skills</h2>
                  <hr />
                  {userData &&
                    userData.skills.map((item, i) => (
                      <div key={i}>
                        <li>{item.skills}</li>
                        <hr />
                      </div>
                    ))}
                </ul>
              </div>
              <div className=" ms-5 col-6">
                <h1 className="text-end">
                  {userData && userData.firstName}{" "}
                  {userData && userData.lastName}
                </h1>
                <p className="fs-3 text-end">{userData && userData.profile}</p>
                <div
                  className="ms-auto"
                  style={{
                    width: "30vh",
                    height: "10px",
                    marginTop: "-20px",
                    backgroundColor: "blue",
                  }}
                ></div>
                <div className="mt-3">
                  <h2>Self Description</h2>
                  <hr />
                  <h5>{userData && userData.desc}</h5>
                </div>
                <div className="mt-3" style={{ lineHeight: "5px" }}>
                  <h2>Experience</h2>
                  <hr />
                  {userData &&
                    userData.experience.map((item, Index) => (
                      <div key={Index}>
                        <p>Companies Name: {item.compName}</p>
                        <p>Work Duration: {item.workYear}</p>
                        <p>Role: {item.workRole}</p>
                        <hr />
                      </div>
                    ))}
                </div>
                <ul className="mt-3" style={{ lineHeight: "7px" }}>
                  <h2>Hobbies</h2>
                  <hr />
                  {userData &&
                    userData.hobby.map((item, i) => (
                      <div key={i}>
                        <li>{item.hobby}</li>
                        <hr />
                      </div>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Index;
