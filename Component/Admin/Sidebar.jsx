import React from 'react'
import "../Admin/Style.css";
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className="sidebar app-aside" id="sidebar">
      <div className="sidebar-container perfect-scrollbar">
        <nav>
          {/* start: MAIN NAVIGATION MENU */}
          <div className="navbar-title">
            <span className='text-primary'>Main Navigation</span>
          </div>
          <ul className="main-navigation-menu">
            <li>
              <a href="dashboard.php">
                <div className="item-content">
                  <div className="item-media">
                    <i className="ti-home" />
                  </div>
                  <div className="item-inner">
                    <Link className="title text-primary text-decoration-none" to="/"> Dashboard </Link>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="item-content">
                  <div className="item-media">
                    <i className="ti-user" />
                  </div>
                  <div className="item-inner">
                  <Link className=' title text-primary text-decoration-none' to="/doctor">Doctor</Link><i className="icon-arrow" />
                  </div>
                </div>
              </a>
              <ul className="sub-menu">
                
              </ul>
            </li>
            
            <li>
              <a href="javascript:void(0)">
                <div className="item-content">
                  <div className="item-media">
                    <i className="ti-user" />
                  </div>
                  <div className="item-inner">
                    <Link className="title text-primary text-decoration-none"> Patients </Link><i className="icon-arrow" />
                  </div>
                </div>
              </a>
              <ul className="sub-menu">
                
              </ul>
            </li>
            <li>
              <a href="appointment-history.php">
                <div className="item-content">
                  <div className="item-media">
                    <i className="ti-file" />
                  </div>
                  <div className="item-inner">
                    <Link className="title text-primary text-decoration-none"> Appointment History </Link>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          {/* end: CORE FEATURES */}
        </nav>
      </div>
    </div>

  )
}

export default Sidebar