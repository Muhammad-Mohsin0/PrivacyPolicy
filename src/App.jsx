import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DeleteAccount from "./pages/DeleteAccount";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivacyPolicy />} />
        <Route path="/delete" element={<DeleteAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
