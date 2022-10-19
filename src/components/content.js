import '../App.css'
import React from 'react';
// import location from "../images/location.png"

import moment from "moment";
import Chart from 'chart.js/auto';
import {Line} from 'react-chartjs-2';

class contentPage extends React.Component{ 

  constructor(props) {
    super(props);
    this.state = { dataArr: [], dataArr2: [], dataArr3: []};
  }
  

  async componentDidMount() {
      
      // try {
      //   // https://magellan.ais.co.th/asgardpullmessagesapis/api/listen/thing?Key=893747583B7E5DEF2297D252B52383DF
      //   let res = await fetch(`http://127.0.0.1:5000/api/database/bus_info/summaryTable/${this.props.dataFromParent}`);
      //   let data = await res.json();
      //   this.setState({dataArr: data})
      // }
      // catch(error){
      //   console.log(error)
      // }

      Promise.all([
        fetch(`https://server-vercel-oct-2022.vercel.app/api/database/bus_info/summaryTable/${this.props.dataFromParent}`).then(res => res.json()),
        fetch(`https://server-vercel-oct-2022.vercel.app/api/database/bus_info/summaryTable/sorted_location/${this.props.dataFromParent}`).then(res => res.json()),
        fetch(`https://server-vercel-oct-2022.vercel.app/api/database/bus_info/summaryTable/sorted_schedule/${this.props.dataFromParent}`).then(res => res.json())
      ]).then(([res1, res2, res3]) => {
        this.setState({dataArr: res1, dataArr2: res2, dataArr3: res3})
      })


  }

  render(){

    var time_location1 = [];
    var now_user_location1 = [];
    var in_user_location1 = [];
    var out_user_location1 = [];

    var time_location2 = [];
    var now_user_location2 = [];
    var in_user_location2 = [];
    var out_user_location2 = [];

    var time_location3 = [];
    var now_user_location3 = [];
    var in_user_location3 = [];
    var out_user_location3 = [];

    var time_location4 = [];
    var now_user_location4 = [];
    var in_user_location4 = [];
    var out_user_location4 = [];

    var time_location5 = [];
    var now_user_location5 = [];
    var in_user_location5 = [];
    var out_user_location5 = [];

    var time_location6 = [];
    var now_user_location6 = [];
    var in_user_location6 = [];
    var out_user_location6 = [];

    var time_location7 = [];
    var now_user_location7 = [];
    var in_user_location7 = [];
    var out_user_location7 = [];

    var time_location8 = [];
    var now_user_location8 = [];
    var in_user_location8 = [];
    var out_user_location8 = [];

    this.state.dataArr.map(value => {
      const time = moment(value.schedule_date).utc().local().format('h:mm a');
      if (value.location === 'station1'){
        time_location1.push(time)
        now_user_location1.push(value.now_user)
        in_user_location1.push(value.get_in_user)
        out_user_location1.push(value.get_out_user)
      }
      else if (value.location === 'station2'){
        time_location2.push(time)
        now_user_location2.push(value.now_user)
        in_user_location2.push(value.get_in_user)
        out_user_location2.push(value.get_out_user)
      }
      else if (value.location === 'station3'){
        time_location3.push(time)
        now_user_location3.push(value.now_user)
        in_user_location3.push(value.get_in_user)
        out_user_location3.push(value.get_out_user)
      }
      else if (value.location === 'station4'){
        time_location4.push(time)
        now_user_location4.push(value.now_user)
        in_user_location4.push(value.get_in_user)
        out_user_location4.push(value.get_out_user)
      }
      else if (value.location === 'station5'){
        time_location5.push(time)
        now_user_location5.push(value.now_user)
        in_user_location5.push(value.get_in_user)
        out_user_location5.push(value.get_out_user)
      }
      else if (value.location === 'station6'){
        time_location6.push(time)
        now_user_location6.push(value.now_user)
        in_user_location6.push(value.get_in_user)
        out_user_location6.push(value.get_out_user)
      }
      else if (value.location === 'station7'){
        time_location7.push(time)
        now_user_location7.push(value.now_user)
        in_user_location7.push(value.get_in_user)
        out_user_location7.push(value.get_out_user)
      }
      else if (value.location === 'station8'){
        time_location8.push(time)
        now_user_location8.push(value.now_user)
        in_user_location8.push(value.get_in_user)
        out_user_location8.push(value.get_out_user)
      }
    });

        return (
            <main className="main-content position-relative border-radius-lg ">
            <div className='App-overtable' id="style-1">
            <div className="container-fluid py-4">
              <div className="row">
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                  <div className="card">
                    <div className="card-body p-3">
                      <div className="row">
                        <div className="col-8">
                          <div className="numbers">
                            <p className="text-sm mb-0 text-uppercase font-weight-bold">Bus Number</p>
                            <h5 className="font-weight-bolder">
                              888
                            </h5>
                            {/* <p className="mb-0">
                              <span className="text-success text-sm font-weight-bolder">+543 </span>
                              since last month
                            </p> */}
                          </div>
                        </div>
                        <div className="col-4 text-end">
                          <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                            <i className="ni ni-single-02 text-lg opacity-10" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                  <div className="card">
                    <div className="card-body p-3">
                      <div className="row">
                        <div className="col-8">
                          <div className="numbers">
                            <p className="text-sm mb-0 text-uppercase font-weight-bold">Now Passenger</p>
                            <h5 className="font-weight-bolder">
                              3
                            </h5>
                            {/* <p className="mb-0">
                              <span className="text-success text-sm font-weight-bolder">+18 </span>
                              since last 5 minutes
                            </p> */}
                          </div>
                        </div>
                        <div className="col-4 text-end">
                          <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                            <i className="ni ni-badge text-lg opacity-10" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="card">
                    <div className="card-body p-3">
                      <div className="row">
                        <div className="col-8">
                          <div className="numbers">
                            <p className="text-sm mb-0 text-uppercase font-weight-bold">Current Station</p>
                            <h5 className="font-weight-bolder">
                              Siit
                            </h5>
                            <p className="mb-0">
                              {/* Next: <span className="text-success text-sm font-weight-bolder">TU dome</span>  */}
                            </p>
                          </div>
                        </div>
                        <div className="col-4 text-end">
                          <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                            <i className="ni ni-pin-3 text-lg opacity-10" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                  <div className="card">
                    <div className="card-body p-3">
                      <div className="row">
                        <div className="col-8">
                          <div className="numbers">
                            <p className="text-sm mb-0 text-uppercase font-weight-bold">Next Station</p>
                            <h5 className="font-weight-bolder">
                              TU dome
                            </h5>
                            {/* <p className="mb-0">
                              <span className="text-success text-sm font-weight-bolder">+18 </span>
                              since last hour
                            </p> */}
                          </div>
                        </div>
                        <div className="col-4 text-end">
                          <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                            <i className="ni ni-circle-08 text-lg opacity-10" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-header pb-0 p-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-2"> Daily Analysis </h6>
                      </div>
              </div>
              <div className="App-bg-graph">  
                <div className="row mt-4">
                {this.state.dataArr2.map(value => {
                      var time_location = [];
                      var now_user_location = [];
                      var in_user_location = [];
                      var out_user_location = [];

                      if (value.location === 'station1'){
                        time_location = time_location1;
                        now_user_location = now_user_location1;
                        in_user_location = in_user_location1;
                        out_user_location = out_user_location1;
                      }
                      else if (value.location === 'station2'){
                        time_location = time_location2;
                        now_user_location = now_user_location2;
                        in_user_location = in_user_location2;
                        out_user_location = out_user_location2;
                      }
                      else if (value.location === 'station3'){
                        time_location = time_location3;
                        now_user_location = now_user_location3;
                        in_user_location = in_user_location3;
                        out_user_location = out_user_location3;
                      }
                      else if (value.location === 'station4'){
                        time_location = time_location4;
                        now_user_location = now_user_location4;
                        in_user_location = in_user_location4;
                        out_user_location = out_user_location4;
                      }
                      else if (value.location === 'station5'){
                        time_location = time_location5;
                        now_user_location = now_user_location5;
                        in_user_location = in_user_location5;
                        out_user_location = out_user_location5;
                      }
                      else if (value.location === 'station6'){
                        time_location = time_location6;
                        now_user_location = now_user_location6;
                        in_user_location = in_user_location6;
                        out_user_location = out_user_location6;
                      }
                      else if (value.location === 'station7'){
                        time_location = time_location7;
                        now_user_location = now_user_location7;
                        in_user_location = in_user_location7;
                        out_user_location = out_user_location7;
                      }
                      else if (value.location === 'station8'){
                        time_location = time_location8;
                        now_user_location = now_user_location8;
                        in_user_location = in_user_location8;
                        out_user_location = out_user_location8;
                      }

                  const data = {
                    labels: time_location,
                    datasets: [
                      {
                        label: "Current Passenger",
                        data: now_user_location,
                        fill: true,
                        backgroundColor: "rgba(75,192,192,0.2)",
                        borderColor: "rgba(75,192,192,1)"
                      },
                      {
                        label: "Incoming Passenger",
                        data: in_user_location,
                        fill: false,
                        borderColor: "#742774"
                      },
                      {
                        label: "Outgoing Passenger",
                        data: out_user_location,
                        fill: false,
                        borderColor: "#EF3A4C"
                      }
                    ]
                  };

                  return (
                    <React.Fragment key = {value.location}>
                          <div className="col-xl-6 col-sm-6">
                              {value.location}
                              {/* <canvas id="chart-line" className="chart-canvas" height="300"></canvas> */}
                              <Line data={data} />  
                          </div>
                    </React.Fragment>
                  )
                })}      
                </div>     
              </div>


              <div className="row mt-4">
                <div className="col-lg-12 mb-lg-0 mb-4">
                  <div className="card ">
                    <div className="card-header pb-0 p-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-2">History </h6>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table align-items-center ">
                        <tbody>
                          <tr>
                            <td>
                              <div className="align-items-center">
                                {/* <div>
                                  <img src={location} alt="Country flag"/>
                                </div> */}
                                <div className="text-center">
                                  <p className="text-xs font-weight-bold mb-0">Date</p>
                                  {/* <h6 className="text-sm mb-0">25/8/2022</h6> */}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="text-center">
                                <p className="text-xs font-weight-bold mb-0">Current Passenger</p>
                                {/* <h6 className="text-sm mb-0">6</h6> */}
                              </div>
                            </td>
                            <td>
                              <div className="text-center">
                                <p className="text-xs font-weight-bold mb-0">Getting in Passenger</p>
                                {/* <h6 className="text-sm mb-0">3</h6> */}
                              </div>
                            </td>
                            <td>
                              <div className="text-center">
                                <p className="text-xs font-weight-bold mb-0">Getting out Passenger</p>
                                {/* <h6 className="text-sm mb-0">0</h6> */}
                              </div>
                            </td>
                            <td className="align-middle text-sm">
                              <div className="col text-center">
                                <p className="text-xs font-weight-bold mb-0">Station</p>
                                {/* <h6 className="text-sm mb-0">Station 1</h6> */}
                              </div>
                            </td>
                            <td>
                              <div className="text-center">
                                <p className="text-xs font-weight-bold mb-0">Time</p>
                                {/* <h6 className="text-sm mb-0">10:59</h6> */}
                              </div>
                            </td>
                          </tr>
                          {this.state.dataArr3.map(value => {
              
                              const day = moment(value.schedule_date).utc().local().format('DD/MM/YYYY');
                              const time = moment(value.schedule_date).utc().local().format('h:mm a');

                            return (
                              <React.Fragment key={value.schedule_date}>
                                <tr>
                                  <td>
                                    <div className="align-items-center">
                                      {/* <div>
                                        <img src={location} alt="Country flag"/>
                                      </div> */}
                                      <div className="text-center">
                                        {/* <p className="text-xs font-weight-bold mb-0">Date</p> */}
                                        <h6 className="text-sm mb-0">{day}</h6>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="text-center">
                                      {/* <p className="text-xs font-weight-bold mb-0">Current Passenger</p> */}
                                      <h6 className="text-sm mb-0">{value.now_user}</h6>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="text-center">
                                      {/* <p className="text-xs font-weight-bold mb-0">Incoming Passenger</p> */}
                                      <h6 className="text-sm mb-0">{value.get_in_user}</h6>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="text-center">
                                      {/* <p className="text-xs font-weight-bold mb-0">Outgoing Passenger</p> */}
                                      <h6 className="text-sm mb-0">{value.get_out_user}</h6>
                                    </div>
                                  </td>
                                  <td className="align-middle text-sm">
                                    <div className="col text-center">
                                      {/* <p className="text-xs font-weight-bold mb-0">Station</p> */}
                                      <h6 className="text-sm mb-0">{value.location}</h6>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="text-center">
                                      {/* <p className="text-xs font-weight-bold mb-0">Time</p> */}
                                      <h6 className="text-sm mb-0">{time}</h6>
                                    </div>
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
          </main>
          
        )
    }
                               
  }

export default contentPage
