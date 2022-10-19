import './mapStyles.css'
import React from 'react';
import {Link} from "react-router-dom"

import bus from "../images/smBus.png"
import map from "../images/map_artEd.png"
import greenRoad from "../images/onlyRoadGreen.png"


const busMap = () => {
    return (
        <div className='App'>
                <img src={map} alt="map" className="map"/>
                <img src={greenRoad} alt="green road" className="road"/>
                
                <Link  to="/Dashboard" >
                    <img src={bus} alt="bus icon" className="bus_way1"/>
                    <img src={bus} alt="bus icon" className="bus_way2"/>
                    <img src={bus} alt="bus icon" className="bus_way3"/>
                    <img src={bus} alt="bus icon" className="bus_way4"/>
                    <img src={bus} alt="bus icon" className="bus_way5"/>
                </Link>
              
        </div>
      );
  };

  export default busMap