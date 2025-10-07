import logo from "/logo.png";
import ProgressBar from "./ProgressBar";

export default function TopArtistElement({ element }) {
  return (
    <div className="top-artist-element">
      <div className="rank">{element.rank}</div>
      <div className="artist-name">{element.name}</div>
      <div className="artist-pic-container">
        <img src={logo} style={{ width: "80px" }} />
      </div>
      <div className="genre-listens-info">
        <div className="genres">
          {element.genres.map((genre, index) => (
            <span key={index} className="genre-tag">
              {genre}
            </span>
          ))}
        </div>
        <div className="listens">
          Listens <span>{element.listens}</span>
        </div>
      </div>
      <div className="top-artist-statistics">
        <div className="energy">
          <div className="info">
            <p>Energy</p>
            <p>{element.energy * 100}%</p>
          </div>
          <ProgressBar percentage={element.energy * 100} />
          <span className="stat-percentage">{element.energy * 100}%</span>
        </div>
        <div className="danceability">
          <div className="info">
            <p>Danceability</p>
            <p>{element.danceability}</p>
          </div>
          <ProgressBar percentage={element.danceability * 100} />{" "}
          <span className="stat-percentage">{element.danceability * 100}%</span>
        </div>
      </div>
    </div>
  );
}
