import { useSearchParams } from "react-router-dom";
import { FaChartColumn } from "react-icons/fa6";

export default function TopArtists() {
  const [searchParams, setSearchParams] = useSearchParams();
  const time = searchParams.get("time");
  return (
    <div className="top-artists-container">
      <div className="title">
        <FaChartColumn style={{ color: "#1db954", fontSize: "30px" }} />
        <h2 style={{ color: "white" }}>Your most listened to artists</h2>
      </div>
    </div>
  );
}
