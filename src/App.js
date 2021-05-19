import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes />
      </div>
    </BrowserRouter>
  );
}
