import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { NavBar } from "./components/Navigation";
import Settings from "./pages/Settings";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Fragment>
  );
}

export default App;
