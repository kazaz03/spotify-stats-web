import { useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function RecommendationElement({
  icon: IconComponent,
  title,
  description,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="recommendation-element"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="recommendation-icon-box">
        <FaPlay
          style={{
            color: "black",
            fontSize: "40px",
            transition: "opacity 0.7s ease",
            position: "absolute",
            opacity: isHovered ? 1 : 0,
          }}
        />
        <IconComponent
          style={{
            color: "black",
            fontSize: "40px",
            transition: "opacity 0.7s ease",
            position: "absolute",
            opacity: isHovered ? 0 : 1,
          }}
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
