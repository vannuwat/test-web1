import React from "react";
import "./dashboard.css" 

import LBM from "../components/left_bar_menu"
import STB from "../components/summaryTable"

const table = () =>{
  return (
    <div className="App">
      <LBM />
      <STB />
    </div>
  )
}
export default table;
