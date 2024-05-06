import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import FirstPage from "./pages/1";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/1" element={<FirstPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
