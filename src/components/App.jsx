import React from "react";
import MainPage from "../pages/Main.jsx";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
export default App;
