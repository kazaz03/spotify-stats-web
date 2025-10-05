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
import TopTracks from "../pages/TopTracks.jsx";
import TopArtists from "../pages/TopArtists.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/top" element={<Top />} />
        <Route path="/music" element={<Music />}>
          <Route
            index
            element={<Navigate to="toptracks?time=week" replace />}
          />
          <Route path="toptracks" element={<TopTracks />} />
          <Route path="topartists" element={<TopArtists />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
