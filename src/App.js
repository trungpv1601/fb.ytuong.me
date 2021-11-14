import * as React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import PrivacyPage from "./screens/PrivacyPage";

 export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPage />} />
    </Routes>
  );
}
