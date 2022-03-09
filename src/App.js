import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import React from "react";
import Welcome from "./components/Welcome/Welcome";
import Cursor from "./components/CostumCursor/CostumCursor";
const PersonalInformation = React.lazy(() =>
  import("./components/PersonalInformation/PersonalInformation")
);
const TechnicalSkillset = React.lazy(() =>
  import("./components/TechnicalSkillset/TechnicalSkillset")
);
const Covid = React.lazy(() => import("./components/Covid/Covid"));
const RedberrianInsights = React.lazy(() =>
  import("./components/RedberrianInsights/RedberrianInsights")
);
const Submit = React.lazy(() => import("./components/Submit/Submit"));
const Thanks = React.lazy(() => import("./components/Thanks/Thanks"));
const SubmitedList = React.lazy(() =>
  import("./components/SubmittedList/SubmitedList")
);
function App() {
  return (
    <Suspense fallback={""}>
      <Router>
        <Cursor />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/Personal-Information"
            element={<PersonalInformation />}
          />
          <Route path="/Technical-Skillset" element={<TechnicalSkillset />} />
          <Route path="/Covid" element={<Covid />} />
          <Route path="/Redberrian-Insights" element={<RedberrianInsights />} />
          <Route path="/Submit" element={<Submit />} />
          <Route path="/Thanks" element={<Thanks />} />
          <Route path="/SubmitedList" element={<SubmitedList />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
