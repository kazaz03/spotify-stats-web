import { useSearchParams } from "react-router-dom";

export default function TopTracks() {
  const [searchParams, setSearchParams] = useSearchParams();
  const time = searchParams.get("time");
  return <h1 style={{ color: "white" }}>Top tracks here in this {time}</h1>;
}
