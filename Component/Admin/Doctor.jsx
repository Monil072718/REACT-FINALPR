import React from 'react'
import Dashboard from'./Dashboard'
import PendingAppointment from './PendingAppointment'
import Appointmenthistory from './Appointmenthistory'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar'
const Doctor = () => {
    return (
        <>
            <div className="col-2">
                <Sidebar />
            </div>
            <div className="col-10">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    {/* <Route path="/appoinment" element={<Appoinment />} /> */}
                    <Route path="/pendingappoinment" element={<PendingAppointment />} />
                    <Route path="/history" element={<Appointmenthistory />} />
                    {/* <Route path="/rejectappoinment" element={<Rejectappo />} />
                    <Route path="/doctorprofail" element={<DoctorProfail />} />
                    <Route path="/chengepassword" element={<Changepassword />} /> */}

                </Routes>
            </div>
        </>
    )
}

export default Doctor