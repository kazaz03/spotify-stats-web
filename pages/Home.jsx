import React from "react";
import LastTrackListened from "../components/LastTrackListened";
import SoundEnergy from "../components/SoundEnergy";
import MusicTimeline from "../components/MusicTimeline";
import RecommendationPart from "../components/RecommendationPart";

export default function Home() {
  return (
    <>
      <div className="greeting-part">
        <h1>
          Welcome back, <span style={{ color: "#1db954" }}>Username</span>!
        </h1>
        <p>Your music horizon is expanding.</p>
      </div>
      <LastTrackListened />
      <SoundEnergy />
      <MusicTimeline />
      <RecommendationPart />
    </>
  );
}
