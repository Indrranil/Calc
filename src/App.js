import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header";
import Calculator from "./components/Calculator";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/calculator1" element={<Calculator />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>
    </div>
  );
}

export default App;
