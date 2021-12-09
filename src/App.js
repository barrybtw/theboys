import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./Pages";

function App() {
  return (
    <>
      <Router>
        {/* Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* Footer */}
      </Router>
    </>
  );
}

export default App;
