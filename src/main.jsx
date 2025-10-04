import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "../pages/Home.jsx";
import Top from "../pages/Top.jsx";
import Layout from "../components/Layout.jsx";
import Profile from "../pages/Profile.jsx";
import Settings from "../pages/Settings.jsx";
import Music from "../pages/Music.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/top" element={<Top />} />
        <Route path="/music" element={<Music />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
