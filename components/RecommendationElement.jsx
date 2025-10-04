export default function RecommendationElement({ icon: IconComponent }) {
  return (
    <div className="recommendation-element">
      <div className="recommendation-icon-box">
        <IconComponent style={{ color: "white", fontSize: "20px" }} />
      </div>
    </div>
  );
}
