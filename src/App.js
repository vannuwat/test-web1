import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Dashboard from "./pages/dashboard.js";
import Table from "./pages/tables.js";


const Home = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <h1>Home</h1>
      <h2>Home page</h2>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <h1>About</h1>
      <h2>About page</h2>
    </div>
  );
}

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
      </Routes>
    </Router>
  );
}
export default App;
