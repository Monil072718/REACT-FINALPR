import React from 'react'
import admin from '../images/admin.jpg'
import doctor from '../images/doctor.jpg'
import patient from '../images/patient.jpg'
import "../Style/Style.css"
const Alllogins = () => {
    return (
        <>
            <section id="logins" className="our-blog container-fluid">
                <div className="container">
                    <div className="inner-title">
                        <h2>Logins</h2>
                    </div>
                    <div className="col-sm-12 blog-cont">
                        <div className="row no-margin">
                            <div className="col-sm-4 blog-smk">
                                <div className="blog-single">
                                    <img src={patient} alt />
                                    <div className="blog-single-det">
                                        <h6>Patient Login</h6>
                                        
                                            <button className="btn btn-success btn-sm">Click Here</button>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 blog-smk">
                                <div className="blog-single">
                                    <img src={doctor} alt />
                                    <div className="blog-single-det">
                                        <h6>Doctors login</h6>
                                        
                                            <button className="btn btn-success btn-sm">Click Here</button>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 blog-smk">
                                <div className="blog-single">
                                    <img src={admin} alt />
                                    <div className="blog-single-det">
                                        <h6>Admin Login</h6>
                                        
                                            <button className="btn btn-success btn-sm">Click Here</button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Alllogins