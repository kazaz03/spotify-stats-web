import { useSearchParams } from "react-router-dom";

export default function TopArtists() {
  const [searchParams, setSearchParams] = useSearchParams();
  const time = searchParams.get("time");
  return <h1 style={{ color: "white" }}>Top artists here in this {time}</h1>;
}
