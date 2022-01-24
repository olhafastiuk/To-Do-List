import React from "react";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Home from "./pages/Home";
import { NavBar } from "./components/Navigation";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
