import LoginPage from "./components/loginpage";
import { Route, Routes } from "react-router-dom";
import React from "react";
import RegisterPage from "./components/registerpage";
import Treatment from './components/treatment'
import Prevention from "./components/Prevention";
import Causes from "./components/Causes";
import Predict from "./components/predict";
import HomePage from "./components/homePage";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/causes' element={<Causes />} />
      <Route path='/prevention' element={<Prevention /> } />
      <Route path='/treatment' element={<Treatment />} />
      
      <Route path="/predict" element={<Predict />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
