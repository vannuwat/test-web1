
import React from "react";
import "./dashboard.css" 
import LBM from "../components/left_bar_menu"
import CT from "../components/content"

import { useLocation} from "react-router-dom";



const Dashboard = (props) => {
  const location = useLocation();
  const state = location.state;
  // console.log(typeof(state));

  return (
    <div className='App'>
          <CT dataFromParent = {state}/>
     </div>
  );
};

export default Dashboard;
