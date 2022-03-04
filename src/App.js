import Welcome from "./components/Welcome/Welcome";
import PersonalInformation from "./components/PersonalInformation/PersonalInformation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="Personal-Information" element={<PersonalInformation />} />
      </Routes>
    </Router>
  );
}

export default App;
