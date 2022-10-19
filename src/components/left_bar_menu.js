
import "../assets/css/nucleo-icons.css"
import "../assets/css/nucleo-svg.css"
import "../assets/css/argon-dashboard.css"
import "https://kit.fontawesome.com/42d5adcbca.js"
import img2 from "../assets/img/illustrations/icon-documentation.svg"
import React from 'react';
import {Link} from "react-router-dom";

const LBM = () => {
  let hover1 = "nav-link active"
  let hover2 = "nav-link"
  if(window.location.href === "http://localhost:3000/"){
    hover1 = "nav-link active"
  }
  else if (window.location.href === "http://localhost:3000/Dashboard"){
    hover1 = "nav-link"
    hover2 = "nav-link"
  }
  else if (window.location.href === "http://localhost:3000/iot"){
    hover1 = "nav-link"
    hover2 = "nav-link active"
  }
    return (
  <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
    <div className="sidenav-header">
      
      <div className="navbar-brand m-0" >
        <span className="ms-1 font-weight-bold">Bus Collection</span>
      </div>
    </div>
    <hr className="horizontal dark mt-0"/>
    <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">
          <div className={hover1}>
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <div className="ni ni-bus-front-12 grid-58 text-warning text-sm opacity-10"></div>
            </div>
            <span className="nav-link-text ms-1">Tables</span>
          </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/iot">
          <div className={hover2}>
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Magellan Test</span>
          </div>
          </Link>
        </li>
        
      </ul>
    </div>
    <div className="sidenav-footer mx-3 ">
      <div className="card card-plain shadow-none" id="sidenavCard">
        <div className="w-50 mx-auto" src={img2} alt="sidebar_illustration"/>
        <div className="card-body text-center p-3 w-100 pt-0">
          <div className="docs-info">
            <h6 className="mb-0">Need help?</h6>
            <p className="text-xs font-weight-bold mb-0">Please check our docs</p>
          </div>
        </div>
      </div>
      <div className="btn btn-dark btn-sm w-100 mb-3">Documentation</div>
    
    </div>
  </aside>
    );
}

export default LBM;
