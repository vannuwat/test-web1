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
    <Router>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/iot" element={<Iot />} />
      </Routes>
    </Router>
  );
}
export default App;
