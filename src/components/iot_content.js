import React from 'react'
import {Link} from "react-router-dom"
import '../App.css'
// import BM from "./busMap"

class IotContent extends React.Component{ 

  constructor(props) {
      super(props);
      this.state = { dataArr: []};
    }

  async componentDidMount() {
      
      try {
        // https://magellan.ais.co.th/asgardpullmessagesapis/api/listen/thing?Key=893747583B7E5DEF2297D252B52383DF
        const res = await fetch('https://server-vercel-oct-2022.vercel.app/api/database/magellan/sensor')
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
    <div className='App-overtable' id="style-1">
    <div className="container-fluid py-4 ">
     
    </div>
    </div>
  </main>   
   )
   }
}

export default IotContent