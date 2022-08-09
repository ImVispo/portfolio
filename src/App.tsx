import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <div className="w-full px-5 md:px-10 py-5 border-b border-white/10 flex space-x-10">
          <p className="text-white/50">Nickholas Boboaca</p>
          <p className="text-white/50">nickcboboaca@gmail.com</p>
        </div>
      </Router>
    </div>
  );
}

export default App;
