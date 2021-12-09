import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./Pages";
import { Almighty } from "./Components/Container";

function App() {
  return (
    <Almighty>
      <Router>
        {/* Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* Footer */}
      </Router>
    </Almighty>
  );
}

export default App;
