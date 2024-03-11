import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { app } from '../../Firebase/Firebase';
import Sidebar from "./Sidebar"


const Dashboard = () => {
  const database = getDatabase(app);
  const [contactus, setContactus] = useState()
  const [doctor, setDoctor] = useState()
  const [patient, setPatient] = useState()
  useEffect(() => {
    userlist();
  }, []);

  const userlist = () => {
    const userRef = ref(database, "doctor");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const doctor = Object.keys(data)
          .map((id) => ({ id, ...data[id] }))
        setDoctor(doctor.length);
      } else {
        console.log("data not Found")
      }
    });

    const userRefff = ref(database, "booking");
    onValue(userRefff, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const doctor = Object.keys(data)
          .map((id) => ({ id, ...data[id] }))
        setContactus(doctor.length);
      } else {
        console.log("data not Found")
      }
    });

    const userReff = ref(database, "patient");
    onValue(userReff, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const doctor = Object.keys(data)
          .map((id) => ({ id, ...data[id] }))
        setPatient(doctor.length);
      } else {
        console.log("data not Found")
      }
    });
  };
  return (
    <>
      <div className="col-1">
        <Sidebar />
      </div>
      <div className="col-11">
        <div className="d-flex m-0">
          <div className="col-4 m-1 ms-4 p-4 border rounded">
          
            <p> <i class="fa-solid fa-user-group me-2"></i> {doctor ? doctor : "0"}</p>
            <h5>Total doctor Appointment</h5>
            <div className="col-12 bg-warning p-2 ">
            
              <Link className=' text-white text-decoration-none' to="/doctor/pendingappoinment">View Detail</Link>
            </div>
          </div>
          <div className="col-4 m-1 p-4 border rounded">
            <p>{patient ? patient : "0"}</p>
            <h5>Total patient Appointment</h5>
            <div className="col-12 bg-success p-2 ">
              <Link className=' text-white text-decoration-none' to="/doctor/approveappoinment">View Detail</Link>
            </div>
          </div>
          <div className="col-4 ms-4 m-1 p-4 border rounded">
            <p>{contactus ? contactus : "0"}</p>
            <h5>Total contactus Appointment</h5>
            <div className="col-12 bg-danger p-2 ">
              <Link className=' text-white text-decoration-none' to="/doctor/rejectappoinment">View Detail</Link>
            </div>
          </div>
          {/* <div className="col-5 m-2 p-4 border rounded">
        <p>{apoiment ? apoiment : "0" }</p>
        <h5>Total Appointment</h5>
        <div className="col-12 bg-primary p-2 ">
          <Link className='text-white' to="/doctor/appoinment">View Detail</Link>
        </div>
      </div> */}
        </div>
      </div>
    </>
  )
}

export default Dashboard;