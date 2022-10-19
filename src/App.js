import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Dashboard from "./pages/dashboard.js";
import Table from "./pages/tables.js";
import Iot from "./pages/iot_test";


const App = () => {
  return (
    // <Router>
    //   <div>
    //     <Link to="/">Home</Link>
    //     <Link to="/about">About</Link>
    //   </div>
    //   <Routes>
    //     <Route path="/" exact>
    //       <Home />
    //     </Route>

    //     <Route path="/about" exact>
    //       <About />
    //     </Route>
    //   </Routes>
    // </Router>
    // <Home />
    <Router>
      {/* <a href="/home">Go to home page</a> */}
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/iot" element={<Iot />} />
      </Routes>
    </Router>
  );
}
export default App;
