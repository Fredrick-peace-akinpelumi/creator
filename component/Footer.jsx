import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <>
        <div className="container-fluid bg-dark text-white  py-4 fixed-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center  mb-3 ">
                        &copy; <Link href="/" className="border-bottom text-secondary text-decoration-none " > Cv Creator</Link>  All Right Reserved. 2023
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
