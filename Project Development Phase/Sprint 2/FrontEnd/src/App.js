import LoginPage from "./components/loginpage";
import { Route, Routes } from "react-router-dom";
import React from "react";
import RegisterPage from "./components/registerpage";
import HomePage from "./components/homepage";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
