import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { NavBar } from "./components/Navigation";
import Settings from "./pages/Settings";
import { Provider } from "react-redux";
import { createStore } from "redux";
import tasks from "./components/reducers.js/tasks";

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("tasks", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("tasks");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = createStore(tasks, loadFromLocalStorage());
store.subscribe(() => saveToLocalStorage(store.getState()));

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
