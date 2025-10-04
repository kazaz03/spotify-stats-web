import ProgressBar from "./ProgressBar";
import logo from "/logo.png";

export default function LastTrackListened() {
  return (
    <div className="last-track-container">
      <div className="last-track-img-container">
        <img src={logo}></img>
      </div>
      <div className="last-track-info">
        <h2>Name of track</h2>
        <p>Name of artist</p>
        <ProgressBar percentage={40} />
      </div>
    </div>
  );
}
