import React from 'react'
import { Link } from 'react-router-dom'
import "../Style/Style.css";

const Header = () => {
    return (
        <div className="container-fluid header">
          
                <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
                    <div class="container-fluid ">

                        <div class=" d-flex">
                            <a class="navbar-brand mt-2 mt-lg-0" href="#home">
                              <h1 className=''>HMS</h1>
                            </a>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                                <li class="nav-item">
                                    <a class="nav-link" href="#home">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#about">About</a>

                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#Services">Services</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#gallery">Gallery</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button className='btn filter-button1' id='#contact1'>Book An Appointment</button>
                        </div>
                    </div>
                </nav>
            
        </div>

    )
}

export default Header