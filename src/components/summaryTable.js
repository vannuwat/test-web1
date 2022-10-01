import bus from "../images/smBus.png"
import React from 'react'
import {Link} from "react-router-dom"
import '../App.css'
import BM from "./busMap"

class SummaryTable extends React.Component{ 

  constructor(props) {
      super(props);
      this.state = { dataArr: []};
    }

  async componentDidMount() {
      
      try {
        // https://magellan.ais.co.th/asgardpullmessagesapis/api/listen/thing?Key=8367724AE996DC0A35D386C801911DFB
        let res = await fetch('http://127.0.0.1:5000/api/database/bus_info/summaryTable');
        let data = await res.json();
        this.setState({dataArr: data})
      }
      catch(error){
        console.log(error)
      }
      

  }

  getEachBusData = (e) =>{
      // console.log(e.currentTarget.id)
  }
   
    
   render(){
   return (
    <main className="main-content position-relative border-radius-lg ">
    <div className='App-overtable' id="style-1">
    <div class="container-fluid py-4 ">
    {/* <BM /> */}
      <div class="row">
        <div class="col-12">
          <div class="card mb-4">
            <div class="d-flex card-header pb-0">
              <h6>Bus table</h6>
            </div>
            <div class="card-body px-0 pt-0 pb-2">
              <div class="table-responsive p-0">
              
                <table class="table align-items-center mb-0 ">
                  <thead>
                    <tr>
                      <th class="text-xs font-weight-bold mb-0">Bus ID</th>
                      <th class="text-xs font-weight-bold mb-0">Status</th>
                      <th class="text-xs font-weight-bold mb-0">Current Passenger</th>
                      {/* <th class="text-xs font-weight-bold mb-0">Schedule</th> */}
                      <th class="text-xs font-weight-bold mb-0">Current Station</th>
                      <th class="text-xs font-weight-bold mb-0">Next Station</th>
                      
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
                          <React.Fragment>
                            <tr>
                                <td> 
                                  <div class=" px-4 py-1">
                                    <Link onClick={this.getEachBusData} id={value.bus_id} to="/Dashboard" state = {value.bus_id}>
                                      <div>
                                        <img src={bus} class="navbar-brand-img h-100" alt="user1"/>
                                      </div>
                                      
                                      <div class="d-flex flex-column justify-content-center">
                                        <h6 class="mb-0 text-sm">{value.bus_id}</h6>
                                        {/* <p class="text-xs text-secondary mb-0">john@creative-tim.com</p> */}
                                      </div>
                                    </Link>
                                  </div>
                                </td>
                                <td class="align-middle text-center text-sm">
                                  <span class={state_hover}>{value.status}</span>
                                </td>
                                <td>
                                  <p class="text-xs font-weight-bold mb-0">{value.amount_user}</p>
                                  {/* <p class="text-xs text-secondary mb-0">Organization</p> */}
                                </td>
                                
                                {/* <td class="align-middle text-center">
                                  <span class="text-secondary text-xs font-weight-bold">{value.date_time}</span>
                                </td> */}
                                <td class="align-middle text-center">
                                  <span class="text-secondary text-xs font-weight-bold">{value.current_location}</span>
                                </td>

                                <td class="align-middle text-center">
                                  <span class="text-secondary text-xs font-weight-bold">{value.next_location}</span>
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
        </div>
      </div>
    </div>
    </div>
  </main>   
   )
   }
}

export default SummaryTable