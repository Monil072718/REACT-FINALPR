import { getDatabase, onValue, ref, update } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { app } from '../../Firebase/Firebase';
import Sidebar from './Sidebar';

const PendingAppointment = () => {
    const database = getDatabase(app);
    const [user, setUser] = useState([]);
    const [show, setShow] = useState(false);
    const [input, setInput] = useState();
    const [selectid, setSelectid] = useState();
    useEffect(() => {
        userlist();
    }, []);
    const userlist = () => {
        const userRef = ref(database, "booking");
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const list = Object.keys(data)
                    .map((id) => ({ id, ...data[id] }))
                    .filter(item => (
                        item.status && item.status.includes("Pending")
                    ));
                setUser(list)
            } else {
                console.log("data not Found")
            }
        });
    };

    const handleApprove = async () => {
        await update(ref(database, `booking/${selectid}`), { status: "Approve" });
        await update(ref(database, `booking/${selectid}`), { message: input });

        userlist();
    }
    const handleReject = async () => {
        await update(ref(database, `booking/${selectid}`), { status: "Reject" });
        await update(ref(database, `booking/${selectid}`), { message: input });

        userlist();
    }

    return (

        <>
            <div className="container-fluid d-flex">
                <div className="col-2">
                    <Sidebar />
                </div>
                <div className="col-10">
                    <div className='p-2'>
                        <h1 className='text-center mb-4'>Pending appointment</h1>
                        <div className="container">
                            <table className="container mt-5">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Contact Number</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Time</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Remark</th>
                                        <th scope="col">Action</th>
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
                                            <td>
                                                <button className='btn btn-success mx-2' onClick={() => handleApprove()}>Approve</button>
                                                <button className='btn btn-danger' onClick={() => handleReject()}>Reject</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PendingAppointment