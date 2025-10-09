import React from "react";
import SoundEnergyItem from "../components/SoundEnergyItem";
import PodcastInfoCards from "../components/PodcastInfoCards";

export default function Top() {
  return (
    <div className="podcast-page-container">
      <div className="podcast-page-title">
        <h1>
          Audio <span>Encyclopedia</span>
        </h1>
        <p>Deep insight into your audio content</p>
      </div>
      <h1 style={{ color: "white" }}>
        Still no useful api calls from Spotify for this feature
      </h1>
      <PodcastInfoCards />
    </div>
  );
}
