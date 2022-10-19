import React from "react";
import "./dashboard.css" 

import LBM from "../components/left_bar_menu"
import IOT from "../components/iot_content"


const iotTest = () =>{
  return (
    <div className="App">
      <LBM />
      <IOT />
    </div>
  )
}
export default iotTest;
