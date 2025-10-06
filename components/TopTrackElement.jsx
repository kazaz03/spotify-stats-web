import logo from "/logo.png";
import ProgressBar from "./ProgressBar";
import { FaRegClock } from "react-icons/fa6";

export default function TopTrackElement({ element }) {
  return (
    <div className="top-track-element">
      <div className="top-track-info-left-side">
        <div className="rank-info">{element.rank}</div>
        <div className="top-track-pic-container">
          <img src={logo} style={{ width: "80px" }} />
        </div>
        <div className="top-track-main-info">
          <h3>{element.title}</h3>
          <p style={{ color: "rgba(220, 217, 217, 1)" }}>{element.artist}</p>
          <p className="top-track-album">{element.album}</p>
        </div>
      </div>
      <div className="top-track-info-right-side">
        <div className="top-track-listens">
          <p className="number">{element.listens}</p>
          <p style={{ color: "white" }}>listens</p>
        </div>
        <div className="top-track-mood">
          <p>Mood</p>
          <ProgressBar percentage={element.valence * 100} />
        </div>
        <div className="top-track-duration">
          <FaRegClock style={{ color: "white" }} />
          <p>{element.duration}</p>
        </div>
      </div>
    </div>
  );
}
