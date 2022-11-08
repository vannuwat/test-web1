import bus from "../images/smBus.png"
import React from 'react'
import {Link} from "react-router-dom"
import '../App.css'
import IOT from "./iot_content"
import Badge from 'react-bootstrap/Badge';

class SummaryTable extends React.Component{ 

  constructor(props) {
      super(props);
      this.state = { dataArr: []};
    }

  async componentDidMount() {
      
      try {
        // https://magellan.ais.co.th/asgardpullmessagesapis/api/listen/thing?Key=893747583B7E5DEF2297D252B52383DF
        let res = await fetch('https://server-vercel-oct-2022.vercel.app/api/database/bus_info/summaryTable');
        let data = await res.json();
        this.setState({dataArr: data})
      }
      catch(error){
        console.log(error)
      }
      

  }

    
   render(){
   return (
    <main className="main-content position-relative border-radius-lg ">
    <div className="mt-3"></div>
    <h3><Badge pill bg="primary">Bus Collection</Badge></h3>
    <div className='App-overtable' id="style-1">
    <div className="container-fluid py-4 ">
    <IOT />
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="d-flex card-header pb-0">
              <h6>Bus table</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <div className="table-responsive p-0">
              
                <table className="table align-items-center mb-0 ">
                  <thead>
                    <tr>
                      <th className="text-xs font-weight-bold mb-0">Bus ID</th>
                      <th className="text-xs font-weight-bold mb-0">Status</th>
                      <th className="text-xs font-weight-bold mb-0">Current Passenger</th>
                      {/* <th className="text-xs font-weight-bold mb-0">Schedule</th> */}
                      <th className="text-xs font-weight-bold mb-0">Current Station</th>
                      <th className="text-xs font-weight-bold mb-0">Next Station</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    
                    {this.state.dataArr.map(value => {
                        let state_hover = "badge badge-sm bg-gradient-success"
                        
                        if(value.status === "offline"){
                          state_hover = "badge badge-sm bg-gradient-danger"
                        }
                        else{
                          state_hover = "badge badge-sm bg-gradient-success"
                        }
                        return (
                          <React.Fragment key={value.bus_id}>
                            <tr>
                                <td> 
                                  <div className=" px-4 py-1">
                                    <Link onClick={this.getEachBusData} id={value.bus_id} to="/Dashboard" state = {value.bus_id}>
                                      <div>
                                        <img src={bus} className="navbar-brand-img h-100" alt="user1"/>
                                      </div>
                                      
                                      <div className="d-flex flex-column justify-content-center">
                                        <h6 className="mb-0 text-sm">{value.bus_id}</h6>
                                        {/* <p className="text-xs text-secondary mb-0">john@creative-tim.com</p> */}
                                      </div>
                                    </Link>
                                  </div>
                                </td>
                                <td className="align-middle text-center text-sm">
                                  <span className={state_hover}>{value.status}</span>
                                </td>
                                <td>
                                  <p className="text-xs font-weight-bold mb-0">{value.now_user}</p>
                                  {/* <p className="text-xs text-secondary mb-0">Organization</p> */}
                                </td>
                                
                                {/* <td className="align-middle text-center">
                                  <span className="text-secondary text-xs font-weight-bold">{value.date_time}</span>
                                </td> */}
                                <td className="align-middle text-center">
                                  <span className="text-xs font-weight-bold mb-0">{value.location}</span>
                                </td>

                                <td className="align-middle text-center">
                                  <span className="text-xs font-weight-bold mb-0">{value.next_location}</span>
                                </td>
                          </tr>
                        </React.Fragment>
                            )
                    })}
                         
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="mt-7"></div>
        </div>
      </div>
    </div>
    </div>
  </main>   
   )
   }
}

export default SummaryTable