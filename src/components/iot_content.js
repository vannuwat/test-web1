import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import React from 'react';
import L from 'leaflet';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

class leaftMap extends React.Component{ 

  constructor(props) {
    super(props);
    this.state = { dataArr: [], bus_location: [14.066804016794256, 100.6136421528603]};
  }
  async componentDidMount() {
    const road = [
      [14.066804016794256, 100.6136421528603], 
      [14.073538314651152, 100.61619694046351],
      [14.072158205707805, 100.61266336251603],
      [14.072119482153436, 100.60822693843608],
      [14.07207505685738, 100.60220859290696],
      [14.073349751429198, 100.60162458412518],
      [14.077790013950462, 100.59422109216113],
      [14.077297570784545, 100.5954167742865],
    
    ]
    try {
      // https://magellan.ais.co.th/asgardpullmessagesapis/api/listen/thing?Key=893747583B7E5DEF2297D252B52383DF
      let res = await fetch('https://server-vercel-oct-2022.vercel.app/api/database/bus_info/now_data');
      let data = await res.json();
      this.setState({dataArr: data})
      {this.state.dataArr.map(value => {
        if (value.location === 'Station1'){
          this.setState({ bus_location: road[0]});
        }
        else if (value.location === 'Station2'){
          this.setState({ bus_location: road[1]});
        }
        else if (value.location === "Station3"){
          this.setState({ bus_location: road[2]});
        }
        else if (value.location === 'Station4'){
          this.setState({ bus_location: road[3]});
        }
        else if (value.location === 'Station5'){
          this.setState({ bus_location: road[4]});
        }
        else if (value.location === 'Station6'){
          this.setState({ bus_location: road[5]});
        }
        else if (value.location === 'Station7'){
          this.setState({ bus_location: road[6]});
        }
        else if (value.location === 'Station8'){
          this.setState({ bus_location: road[7]});
        }
        else{
          this.setState({ bus_location: road[0]});
        }

      })}
      
    }
    catch(error){
      console.log(error)
    }
  }

  render(){
  const road = [
    [14.066804016794256, 100.6136421528603], 
    [14.073538314651152, 100.61619694046351],
    [14.072158205707805, 100.61266336251603],
    [14.072119482153436, 100.60822693843608],
    [14.07207505685738, 100.60220859290696],
    [14.073349751429198, 100.60162458412518],
    [14.077790013950462, 100.59422109216113],
    [14.077297570784545, 100.5954167742865],
  ]

  const Routing = ({ sourceCity, destinationCity }) => {
    const map = useMap();
  
    if (!map) return;

    if ( sourceCity !== undefined && destinationCity !== undefined  ) {
        const routingControl = L.Routing.control({
        waypoints: [
          L.latLng( parseFloat(sourceCity[0]), parseFloat(sourceCity[1]) ), 
          L.latLng( parseFloat(destinationCity[0]), parseFloat(destinationCity[1]) )
        ],
        routeWhileDragging: true,
        lineOptions: {
          styles: [{ color: "#6FA1EC", weight: 4 }]
        },
        collapsible: true,
        show: false, 
        showAlternatives: false,
        draggableWaypoints: false,
        addWaypoints: false, 
        fitSelectedRoutes: false,
        createMarker: function () {
          return null;
        }
      }).on('routesfound', function (e) {
        const distance = e.routes[0].summary.totalDistance;
        const time = e.routes[0].summary.totalTime;
      }).addTo(map);
      return () => map.removeControl(routingControl);
    }
        

  }
  const Thamasart_location = [14.074382578127263, 100.602303026015]
  const st1 = [14.068288259303996, 100.61489855485085] //ศูนย์ประชุม
  const st2 = [14.073890853178924, 100.61525961067149] //รพ. ธรรมศาสตร์
  const st3 = [14.072926147132812, 100.61253844366728] //สุขศาสตร์
  const st4 = [14.073770434277998, 100.60853773019797] //วิทยาศาสตร์
  const st5 = [14.073465150690152, 100.60111444870526] //Green canteen
  const st6 = [14.07384811343166, 100.60302619724668] //โดมบริหาร
  const st7 = [14.077794206498844, 100.59421222926208] //Dorm A
  const st8 = [14.077300473526362, 100.59542215385805] //Dorm B

  const myIcon = L.icon({
    //  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
    iconUrl: require("../images/smBus.png"),
    iconSize: [50,32],
    iconAnchor: [20, 20],
    popupAnchor: [0, 0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
  });
  return(
          <div className="row">
            <div className="col-xl-1 col-sm-0 mb-xl-0 mb-4"></div>
            <div className="col-xl-10 col-sm-12 mb-xl-0 mb-4">
              <div className="card mb-4">
              <p className="text-sm mb-0 text-uppercase font-weight-bold">Thammasat Map</p>
              <div className="card-body p-3">
                <MapContainer center={Thamasart_location} zoom={16} scrollWheelZoom={true}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker icon={myIcon} position={this.state.bus_location}> 
                    <Popup>
                      Bus 888 location <br /> at Thammasat Road.
                    </Popup>
                  </Marker>
                  <Marker position={st1}>
                    <Popup>
                      Station 1 <br/> ศูนย์ประชุม
                    </Popup>
                  </Marker>
                  <Marker position={st2}>
                    <Popup>
                      Station 2 <br/> รพ. ธรรมศาสตร์
                    </Popup>
                  </Marker>
                  <Marker position={st3}>
                    <Popup>
                      Station 3 <br/> สุขศาสตร์
                    </Popup>
                  </Marker>
                  <Marker position={st4}>
                    <Popup>
                      Station 4 <br/> วิทยาศาสตร์
                    </Popup>
                  </Marker>
                  <Marker position={st5}>
                    <Popup>
                      Station 5 <br/> Green canteen
                    </Popup>
                  </Marker>
                  <Marker position={st6}>
                    <Popup>
                      Station 6 <br/> โดมบริหาร
                    </Popup>
                  </Marker>
                  <Marker position={st7}>
                    <Popup>
                      Station 7 <br/> Dormitory A
                    </Popup>
                  </Marker>
                  <Marker position={st8}>
                    <Popup>
                      Station 8 <br/> Dormitory B
                    </Popup>
                  </Marker>
                  <Routing sourceCity={road[0]} destinationCity={road[1]}/>
                  <Routing sourceCity={road[1]} destinationCity={road[2]}/>
                  <Routing sourceCity={road[2]} destinationCity={road[3]}/>
                  <Routing sourceCity={road[3]} destinationCity={road[4]}/>
                  <Routing sourceCity={road[4]} destinationCity={road[5]}/>
                  <Routing sourceCity={road[5]} destinationCity={road[6]}/>
                  <Routing sourceCity={road[6]} destinationCity={road[7]}/>
                  <Routing sourceCity={road[7]} destinationCity={road[8]}/>

                </MapContainer>
                </div>
              </div>
            </div>
           </div>
  )
  }
}

export default leaftMap