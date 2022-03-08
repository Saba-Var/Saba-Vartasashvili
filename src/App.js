import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import PersonalInformation from "./components/PersonalInformation/PersonalInformation";
import TechnicalSkillset from "./components/TechnicalSkillset/TechnicalSkillset";
import Covid from "./components/Covid/Covid";
import RedberrianInsights from "./components/RedberrianInsights/RedberrianInsights";
import Submit from "./components/Submit/Submit";
import Cursor from "./components/CostumCursor/CostumCursor";
import Thanks from "./components/Thanks/Thanks";
function App() {
  return (
    <Router>
      <Cursor />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Personal-Information" element={<PersonalInformation />} />
        <Route path="/Technical-Skillset" element={<TechnicalSkillset />} />
        <Route path="/Covid" element={<Covid />} />
        <Route path="/Redberrian-Insights" element={<RedberrianInsights />} />
        <Route path="/Submit" element={<Submit />} />
        <Route path="/Thanks" element={<Thanks />} />
      </Routes>
    </Router>
  );
}

export default App;
