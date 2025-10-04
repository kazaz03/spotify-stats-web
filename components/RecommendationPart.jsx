import RecommendationElement from "./RecommendationElement";
import { FaPodcast } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";

export default function RecommendationPart() {
  return (
    <div className="recommendation-container">
      <h2 style={{ color: "#1db954" }}>Recommended For You</h2>
      <div className="recommendation-elements">
        <RecommendationElement icon={FaMusic} />
        <RecommendationElement icon={FaPodcast} />
      </div>
    </div>
  );
}
