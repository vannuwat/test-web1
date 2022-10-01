
import "../assets/css/nucleo-icons.css"
import "../assets/css/nucleo-svg.css"
import "../assets/css/argon-dashboard.css"
import "https://kit.fontawesome.com/42d5adcbca.js"
import img1 from "../assets/img/logo-ct-dark.png"
import img2 from "../assets/img/illustrations/icon-documentation.svg"
import React from 'react';
import {Link} from "react-router-dom";

const LBM = () => {
  let hover1 = "nav-link active"
  let hover2 = "nav-link"
  if(window.location.href === "http://localhost:3000/"){
    hover1 = "nav-link active"
    hover2 = "nav-link"
  }
  else if (window.location.href === "http://localhost:3000/Dashboard"){
    hover1 = "nav-link"
    hover2 = "nav-link active"
  }
    return (
  <aside class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
    <div class="sidenav-header">
      
      <div class="navbar-brand m-0" >
        <span class="ms-1 font-weight-bold">Bus Collection</span>
      </div>
    </div>
    <hr class="horizontal dark mt-0"/>
    <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item">
          {/* <Link to="/">
          <a class={hover1}>
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Dashboard</span>
          </a>
          </Link> */}
        </li>
        <li class="nav-item">
          <Link to="/">
          <a class={hover1}>
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <image class="ni ni-bus-front-12 grid-58 text-warning text-sm opacity-10"></image>
            </div>
            <span class="nav-link-text ms-1">Tables</span>
          </a>
          </Link>
        </li>
        
      </ul>
    </div>
    <div class="sidenav-footer mx-3 ">
      <div class="card card-plain shadow-none" id="sidenavCard">
        <img class="w-50 mx-auto" src={img2} alt="sidebar_illustration"/>
        <div class="card-body text-center p-3 w-100 pt-0">
          <div class="docs-info">
            <h6 class="mb-0">Need help?</h6>
            <p class="text-xs font-weight-bold mb-0">Please check our docs</p>
          </div>
        </div>
      </div>
      <a href="https://www.youtube.com/watch?v=LMagNcngvcU" class="btn btn-dark btn-sm w-100 mb-3">Documentation</a>
    
    </div>
  </aside>
    );
}

export default LBM;
