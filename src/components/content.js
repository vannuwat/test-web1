import '../App.css'
import React from 'react';
import Button from 'react-bootstrap/Button';
import moment from "moment";
import Chart from 'chart.js/auto';
import {Line, Bar} from 'react-chartjs-2';
import {Link} from "react-router-dom";

class contentPage extends React.Component{ 

  constructor(props) {
    super(props);
    this.state = {nowInfo: [], dataInfo: [], dataSortedLocation: [], dataSortedSchedule: [], dataGraphOv1: [], dataGraphOv2: [], dataGraphOv3: []};
  }

  async componentDidMount() {

    Promise.all([
      fetch(`https://server-vercel-oct-2022.vercel.app/api/database/bus_info/summaryTable`).then(res => res.json()),
      fetch(`https://server-vercel-oct-2022.vercel.app/api/database/bus_info/summaryTable/${this.props.dataFromParent}`).then(res => res.json()),
      fetch(`https://server-vercel-oct-2022.vercel.app/api/database/bus_info/summaryTable/sorted_location/${this.props.dataFromParent}`).then(res => res.json()),
      fetch(`https://server-vercel-oct-2022.vercel.app/api/database/bus_info/summaryTable/sorted_schedule/${this.props.dataFromParent}`).then(res => res.json())
    ]).then(([res0, res1, res2, res3]) => {
      this.setState({nowInfo: res0, dataInfo: res1, dataSortedLocation: res2, dataSortedSchedule: res3})
    })
  }
  
  data_ov1(){
    const labels = ['Station 1', 'Station 2', 'Station 3', 'Station 4', 'Station 5', 'Station 6', 'Station 7', 'Station 8'];
    const data_ov_analysis = {
      labels: labels,
      datasets: [
        {
          label: "Passengers in bus per station",
          data: this.state.dataGraphOv1,
          fill: false,
          backgroundColor: "#FF3871",
          borderColor: "#FF3871",
          color: '#FFFFFF'
        },
        
      ]
    };
    const options_ov_analysis = {
      plugins: {  
        legend: {
          labels: {
            color: "white",  
          }
        }
      },
      scales: {
        y: {
          ticks: { color: 'white', beginAtZero: true}
        },
        x: {
          ticks: { color: 'white', beginAtZero: true }
        }

      }
    };
    return(
      <div className="col-xl-6 col-sm-6 mt-3">
        <div className="card bg-dark text-white">
          <div className="card-body">
            <Line data={data_ov_analysis} options={options_ov_analysis} />  
          </div>
        </div>
      </div>
    )
  }

  data_ov2(){
    const labels = ['Station 1', 'Station 2', 'Station 3', 'Station 4', 'Station 5', 'Station 6', 'Station 7', 'Station 8'];
    const data_ov_analysis2 = {
      labels: labels,
      datasets: [
        {
          label: "Get In Passengers",
          data: this.state.dataGraphOv2,
          fill: false,
          backgroundColor: "#36A0FF",
          borderColor: "#36A0FF",
          color: '#FFFFFF'
        },
        {
          label: "Get Out Passengers",
          data: this.state.dataGraphOv3,
          fill: false,
          backgroundColor: "#36FF42",
          borderColor: "#36FF42",
          color: '#FFFFFF'
        },
        
      ]
    };
    const options_ov_analysis2 = {
      plugins: {  
        legend: {
          labels: {
            color: "white",  
          }
        }
      },
      scales: {
        y: {
          ticks: { color: 'white', beginAtZero: true}
        },
        x: {
          ticks: { color: 'white', beginAtZero: true }
        }

      }
    };
    return(
      <div className="col-xl-6 col-sm-6 mt-3">
        <div className="card bg-dark text-white">
          <div className="card-body">
            <Bar data={data_ov_analysis2} options={options_ov_analysis2} />  
          </div>
        </div>
      </div>
    )
  }


  render(){

    var time_location1 = [];
    var now_user_location1 = [];
    var in_user_location1 = [];
    var out_user_location1 = [];
    let accum_now_user1 = 0
    let accum_in_user1 = 0
    let accum_out_user1 = 0

    var time_location2 = [];
    var now_user_location2 = [];
    var in_user_location2 = [];
    var out_user_location2 = [];
    let accum_now_user2 = 0
    let accum_in_user2 = 0
    let accum_out_user2 = 0

    var time_location3 = [];
    var now_user_location3 = [];
    var in_user_location3 = [];
    var out_user_location3 = [];
    let accum_now_user3 = 0
    let accum_in_user3 = 0
    let accum_out_user3 = 0

    var time_location4 = [];
    var now_user_location4 = [];
    var in_user_location4 = [];
    var out_user_location4 = [];
    let accum_now_user4 = 0
    let accum_in_user4 = 0
    let accum_out_user4 = 0

    var time_location5 = [];
    var now_user_location5 = [];
    var in_user_location5 = [];
    var out_user_location5 = [];
    let accum_now_user5 = 0
    let accum_in_user5 = 0
    let accum_out_user5 = 0

    var time_location6 = [];
    var now_user_location6 = [];
    var in_user_location6 = [];
    var out_user_location6 = [];
    let accum_now_user6 = 0
    let accum_in_user6 = 0
    let accum_out_user6 = 0

    var time_location7 = [];
    var now_user_location7 = [];
    var in_user_location7 = [];
    var out_user_location7 = [];
    let accum_now_user7 = 0
    let accum_in_user7 = 0
    let accum_out_user7 = 0

    var time_location8 = [];
    var now_user_location8 = [];
    var in_user_location8 = [];
    var out_user_location8 = [];
    let accum_now_user8 = 0
    let accum_in_user8 = 0
    let accum_out_user8 = 0

    this.state.dataInfo.map(value => {
      const time = moment(value.schedule_date).utc().local().format('h:mm a');
      if (value.location === 'station1'){
        time_location1.push(time)
        now_user_location1.push(value.now_user)
        in_user_location1.push(value.get_in_user)
        out_user_location1.push(value.get_out_user)
        accum_now_user1 += value.now_user
        accum_in_user1 += value.get_in_user
        accum_out_user1 += value.get_out_user
      }
      else if (value.location === 'station2'){
        time_location2.push(time)
        now_user_location2.push(value.now_user)
        in_user_location2.push(value.get_in_user)
        out_user_location2.push(value.get_out_user)
        accum_now_user2 += value.now_user
        accum_in_user2 += value.get_in_user
        accum_out_user2 += value.get_out_user
      }
      else if (value.location === 'station3'){
        time_location3.push(time)
        now_user_location3.push(value.now_user)
        in_user_location3.push(value.get_in_user)
        out_user_location3.push(value.get_out_user)
        accum_now_user3 += value.now_user
        accum_in_user3 += value.get_in_user
        accum_out_user3 += value.get_out_user
      }
      else if (value.location === 'station4'){
        time_location4.push(time)
        now_user_location4.push(value.now_user)
        in_user_location4.push(value.get_in_user)
        out_user_location4.push(value.get_out_user)
        accum_now_user4 += value.now_user
        accum_in_user4 += value.get_in_user
        accum_out_user4 += value.get_out_user
      }
      else if (value.location === 'station5'){
        time_location5.push(time)
        now_user_location5.push(value.now_user)
        in_user_location5.push(value.get_in_user)
        out_user_location5.push(value.get_out_user)
        accum_now_user5 += value.now_user
        accum_in_user5 += value.get_in_user
        accum_out_user5 += value.get_out_user
      }
      else if (value.location === 'station6'){
        time_location6.push(time)
        now_user_location6.push(value.now_user)
        in_user_location6.push(value.get_in_user)
        out_user_location6.push(value.get_out_user)
        accum_now_user6 += value.now_user
        accum_in_user6 += value.get_in_user
        accum_out_user6 += value.get_out_user
      }
      else if (value.location === 'station7'){
        time_location7.push(time)
        now_user_location7.push(value.now_user)
        in_user_location7.push(value.get_in_user)
        out_user_location7.push(value.get_out_user)
        accum_now_user7 += value.now_user
        accum_in_user7 += value.get_in_user
        accum_out_user7 += value.get_out_user
      }
      else if (value.location === 'station8'){
        time_location8.push(time)
        now_user_location8.push(value.now_user)
        in_user_location8.push(value.get_in_user)
        out_user_location8.push(value.get_out_user)
        accum_now_user8 += value.now_user
        accum_in_user8 += value.get_in_user
        accum_out_user8 += value.get_out_user
      }
      this.setState({dataGraphOv1: [accum_now_user1, accum_now_user2, accum_now_user3, accum_now_user4, accum_now_user5, accum_now_user6, accum_now_user7, accum_now_user8] })
      this.setState({dataGraphOv2: [accum_in_user1, accum_in_user2, accum_in_user3, accum_in_user4, accum_in_user5, accum_in_user6, accum_in_user7, accum_in_user8] })
      this.setState({dataGraphOv3: [accum_out_user1, accum_out_user2, accum_out_user3, accum_out_user4, accum_out_user5, accum_out_user6, accum_out_user7, accum_out_user8] })

    });

        return (
            <main className="main-content position-relative border-radius-lg ">
            <div className="mt-3">
            <Link to="/"><Button variant="primary">Go to home page</Button></Link>
            </div>
            <div className='App-overtable' id="style-1">
            <div className="container-fluid py-4">
              <div className="row">
              {this.state.nowInfo.map(value => {
                return(
                  <React.Fragment key={value.bus_id}>
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                      <div className="card-body p-3">
                        <div className="row">
                          <div className="col-8">
                            <div className="numbers">
                              <p className="text-sm mb-0 text-uppercase font-weight-bold">Bus Number</p>
                              <h5 className="font-weight-bolder">
                                {value.bus_id}
                              </h5>
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
                                {value.now_user}
                              </h5>
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
                  <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                      <div className="card-body p-3">
                        <div className="row">
                          <div className="col-8">
                            <div className="numbers">
                              <p className="text-sm mb-0 text-uppercase font-weight-bold">Current Station</p>
                              <h5 className="font-weight-bolder">
                              {value.location}
                              </h5>
                            </div>
                          </div>
                          <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
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
                              {value.next_location}
                              </h5>
                            </div>
                          </div>
                          <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                              <i className="ni ni-pin-3 text-lg opacity-10" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </React.Fragment>
                )
              })}
              </div>
              <div className="row mt-4">
              <div className="col-lg-4 "></div>
                <div className="col-lg-4 mb-lg-0 mb-4">
                  <div className="card ">
                    <div className="card-body pb-0 p-3">
                      <h6 className="mb-2"> Overview Analysis </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                {this.data_ov1()}
                {this.data_ov2()}
              </div>


              <div className="row mt-4">
              <div className="col-lg-4 "></div>
                <div className="col-lg-4 mb-lg-0 mb-4">
                  <div className="card ">
                    <div className="card-body pb-0 p-3">
                      <h6 className="mb-2"> Station Analysis </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                {this.state.dataSortedLocation.map(value => {
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

                  const data_st_analysis = {
                    labels: time_location,
                    datasets: [
                      {
                        label: "Current Passenger",
                        data: now_user_location,
                        fill: true,
                        backgroundColor: "#FF3871",
                        color: '#FFFFFF'
                      },
                      {
                        label: "Incoming Passenger",
                        data: in_user_location,
                        fill: true,
                        backgroundColor: "#36FF42",
                        color: '#FFFFFF'
                      },
                      {
                        label: "Outgoing Passenger",
                        data: out_user_location,
                        fill: true,
                        backgroundColor: "#36A0FF",
                        color: '#FFFFFF'
                      }
                      
                    ]
                  };
                  const options_st_analysis = {
                    plugins: {  
                      legend: {
                        labels: {
                          color: "white",  
                        }
                      }
                    },
                    scales: {
                      y: {
                        ticks: { color: 'white', beginAtZero: true}
                      },
                      x: {
                        ticks: { color: 'white', beginAtZero: true }
                      }
        
                    }
                  };

                  return (
                    <React.Fragment key = {value.location}>
                          <div className="col-xs-12 col-sm-6 col-xl-3 mt-3">
                            <div className="card bg-dark text-white">
                              <div className="card-body">
                        
                                  {value.location}
                                        <Bar data={data_st_analysis} options={options_st_analysis} />  
  
                                </div>
                      </div>
                    </div>
   
                    </React.Fragment>
                  )
                })}      
             
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
                                <div className="text-center">
                                  <p className="text-xs font-weight-bold mb-0">Date</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="text-center">
                                <p className="text-xs font-weight-bold mb-0">Current Passenger</p>
                              </div>
                            </td>
                            <td>
                              <div className="text-center">
                                <p className="text-xs font-weight-bold mb-0">Getting in Passenger</p>
                              </div>
                            </td>
                            <td>
                              <div className="text-center">
                                <p className="text-xs font-weight-bold mb-0">Getting out Passenger</p>
                              </div>
                            </td>
                            <td className="align-middle text-sm">
                              <div className="col text-center">
                                <p className="text-xs font-weight-bold mb-0">Station</p>
                              </div>
                            </td>
                            <td>
                              <div className="text-center">
                                <p className="text-xs font-weight-bold mb-0">Time</p>
                              </div>
                            </td>
                          </tr>
                          {this.state.dataSortedSchedule.map(value => {
              
                              const day = moment(value.schedule_date).utc().local().format('DD/MM/YYYY');
                              const time = moment(value.schedule_date).utc().local().format('h:mm a');

                            return (
                              <React.Fragment key={value.schedule_date}>
                                <tr>
                                  <td>
                                    <div className="align-items-center">
                                      <div className="text-center">
                                        <h6 className="text-sm mb-0">{day}</h6>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="text-center">
                                      <h6 className="text-sm mb-0">{value.now_user}</h6>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="text-center">
                                      <h6 className="text-sm mb-0">{value.get_in_user}</h6>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="text-center">
                                      <h6 className="text-sm mb-0">{value.get_out_user}</h6>
                                    </div>
                                  </td>
                                  <td className="align-middle text-sm">
                                    <div className="col text-center">
                                      <h6 className="text-sm mb-0">{value.location}</h6>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="text-center">
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
                <div className="mt-7"></div>
              </div>
            </div>
            </div>
          </main>
          
        )
    }
                               
  }

export default contentPage
