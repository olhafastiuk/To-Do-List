import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { NavBar } from "./components/Navigation";
import Settings from "./pages/Settings";
import { Provider } from "react-redux";
import { createStore } from "redux";
import tasks from "./components/reducers.js/tasks";

const store = createStore(
  tasks,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
