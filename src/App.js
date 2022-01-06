import "./app.css";

import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Landing from "./pages/Landing";
import Team from "./pages/Team";
import Impressum from "./pages/Impressum";

function App() {
  return (
    <div class="wrapper">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route exact path="/team" element={<Team/>}/>
          <Route exact path="/impressum" element={<Impressum/>}/>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
