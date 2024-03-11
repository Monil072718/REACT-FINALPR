import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { app } from '../../Firebase/Firebase';
import Sidebar from './Sidebar';

const Appointmenthistory
    = () => {
        const database = getDatabase(app);
        const [originalUser, setOriginalUser] = useState([]);
        const [user, setUser] = useState([]);
        const [startDate, setStartDate] = useState(null);
        const [endDate, setEndDate] = useState(null);

        useEffect(() => {
            userlist();
        }, []);

        const userlist = () => {
            const userRef = ref(database, "booking");
            onValue(userRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    const list = Object.keys(data)
                        .map((id) => ({ id, ...data[id] }));
                    setOriginalUser(list);
                    setUser(list);
                } else {
                    console.log("data not Found");
                }
            });
        };

        const handleSearch = (e) => {
            const name = e.target.value;
            const newList = originalUser.filter((item) =>
                item.name.toLowerCase().includes(name.toLowerCase())
            );
            setUser(newList);
        };
        const handleApply = () => {

            const filteredByDate = originalUser.filter((item) =>
                (!startDate || item.date >= startDate) &&
                (!endDate || item.date <= endDate)
            );

            setUser(filteredByDate);
        }
        const handleStartDateChange = (e) => {
            setStartDate(e.target.value);
        };

        const handleEndDateChange = (e) => {
            setEndDate(e.target.value);
        };

        return (
            <>
                <div className="container-fluid d-flex">
                    <div className="col-2">

                        <Sidebar />
                    </div>
                    <div className="col-10">
                        <div className='p-2'>
                            <h1 className='text-center m-5'>All Appointment</h1>
                            <hr />
                            <div className="filter d-flex justify-content-between align-items-center">
                                <div className="col-2 p-2">
                                    <input type="text" id="" className='form-control m-2' placeholder='Search by Name...' onChange={handleSearch} /></div>
                                <div className="col-6">
                                    <span>Select Date Range : </span>
                                    <input className='border-1 p-1 rounded mr-2' type="date" onChange={handleStartDateChange} /> to <input type="date" className='border-1 p-1 rounded ml-2' onChange={handleEndDateChange} />
                                    <button className='btn btn-primary ms-3' onClick={handleApply}>Apply</button>
                                </div>
                            </div>
                            <hr />
                            <div className="container">
                                <table className="container mt-5">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Contect Number</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Time</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Remark</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {user && user.map((item, index) => (
                                            <tr key={item.id}>
                                                <td scope="row">{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.contect}</td>
                                                <td>{item.date}</td>
                                                <td>{item.time}</td>
                                                <td>{item.status}</td>
                                                <td>{item.message}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    };

export default Appointmenthistory;
