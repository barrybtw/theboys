import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./Pages";
import { Almighty } from "./Components/Container";

import { Navbar } from "./Components";
import { Footer } from "./Components";
import { GlobalStyle } from "./Components/GlobalTheme";
import Friends from "./Pages/Friends/Friends";
function App() {
  return (
    <Almighty>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/find-friends" element={<Friends />} />
        </Routes>
        <Footer />
      </Router>
    </Almighty>
  );
}

export default App;
