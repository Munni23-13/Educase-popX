import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CreateAccount from "./pages/CreateAccount";
import LoginPage from "./pages/LoginPage";
import ProfileView from "./pages/Profileview";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfileView />} />
      </Routes>
    </Router>
  );
}

export default App;