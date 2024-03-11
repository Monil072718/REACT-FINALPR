import React from 'react'
import why from '../images/why.jpg'
const About = () => {
  return (
    <>

      <div className="container my-5 d-flex" id='about'>
        <div className='col'>
          <div>
            <img src={why} alt="" />
          </div>
        </div>
        <div className="col m-4">
          <h3 className='fw-bold'>
            About Our Hospital
          </h3>
          <p class="fw-bold">Our mission declares our purpose of existence as a company and our objectives.</p>
          <p class="fw-bold">﻿The Hospital Management System (HMS) is designed for Any Hospital to replace their existing manual, paper based system. The new system is to control the following information; patient information, room availability, staff and operating room schedules, and patient invoices. These services are to be provided in an efficient, cost effective manner, with the goal of reducing the time and resources currently required for such tasks.A significant part of the operation of any hospital involves the acquisition, management and timely retrieval of great volumes of information. This information typically involves; patient personal information and medical history, staff information, room and ward scheduling, staff scheduling, operating theater scheduling and various facilities waiting lists. All of this information must be managed in an efficient and cost wise fashion so that an institution's resources may be effectively utilized HMS will automate the management of the hospital making it more efficient and error free. It aims at standardizing data, consolidating data ensuring data integrity and reducing inconsistencies.</p>
        </div>
      </div>

    </>
  )
}

export default About