import { useSearchParams } from "react-router-dom";
import { FaChartColumn } from "react-icons/fa6";
import TopTrackElement from "../components/TopTrackElement";

export default function TopTracks() {
  //hardkodirani podaci - jos uvijek nisu prilagodjeni api i bekendu
  const topTracks = [
    {
      rank: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:20",
      listens: 47,
      valence: 0.33,
      trend: "up",
    },
    {
      rank: 2,
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      album: "Fine Line",
      duration: "2:54",
      listens: 32,
      valence: 0.76,
      trend: "same",
    },
    {
      rank: 3,
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      duration: "3:23",
      listens: 28,
      valence: 0.84,
      trend: "up",
    },
    {
      rank: 4,
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      duration: "2:58",
      listens: 25,
      valence: 0.43,
      trend: "down",
    },
    {
      rank: 5,
      title: "Stay",
      artist: "The Kid LAROI, Justin Bieber",
      album: "F*CK LOVE 3: OVER YOU",
      duration: "2:21",
      listens: 23,
      valence: 0.59,
      trend: "up",
    },
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  const time = searchParams.get("time");
  return (
    <div className="top-tracks-container">
      <div className="title">
        <FaChartColumn style={{ color: "#1db954", fontSize: "30px" }} />
        <h2 style={{ color: "white" }}>Your most listened to tracks</h2>
      </div>
      <div className="top-tracks-elements"></div>
    </div>
  );
}
