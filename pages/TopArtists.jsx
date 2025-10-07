import { useSearchParams } from "react-router-dom";
import { FaChartColumn } from "react-icons/fa6";
import TopArtistElement from "../components/TopArtistElement";

export default function TopArtists() {
  const [searchParams, setSearchParams] = useSearchParams();
  const time = searchParams.get("time");
  //hardkodirani podaci - jos uvijek nisu prilagodjeni api i bekendu
  const topArtists = [
    {
      id: 1,
      rank: 1,
      name: "The Weeknd",
      genres: ["Pop", "R&B", "Alternative"],
      listens: 156,
      energy: 0.73,
      danceability: 0.67,
    },
    {
      id: 2,
      rank: 2,
      name: "Dua Lipa",
      genres: ["Pop", "Dance"],
      listens: 89,
      energy: 0.81,
      danceability: 0.84,
    },
    {
      id: 3,
      rank: 3,
      name: "Harry Styles",
      genres: ["Pop", "Rock"],
      listens: 76,
      energy: 0.62,
      danceability: 0.54,
    },
    {
      id: 4,
      rank: 4,
      name: "Olivia Rodrigo",
      genres: ["Pop", "Alternative"],
      listens: 67,
      energy: 0.69,
      danceability: 0.42,
    },
    {
      id: 5,
      rank: 5,
      name: "Billie Eilish",
      genres: ["Alternative", "Pop"],
      listens: 58,
      energy: 0.45,
      danceability: 0.51,
    },
  ];
  return (
    <div className="top-artists-container">
      <div className="title">
        <FaChartColumn style={{ color: "#1db954", fontSize: "30px" }} />
        <h2 style={{ color: "white" }}>Your most listened to artists</h2>
      </div>
      <div className="top-artists-elements">
        {topArtists.map((item) => {
          return <TopArtistElement key={item.id} element={item} />;
        })}
      </div>
    </div>
  );
}
