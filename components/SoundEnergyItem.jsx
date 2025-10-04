import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

export default function SoundEnergyItem({
  icon: IconComponent,
  title,
  response,
  iconColor,
  iconBoxColor,
}) {
  const addProgressBar = title === "Listening time this month";
  const fetchedDummyDifference = 23; //23% more than last time
  //if in minus put down icon, plus put up icon
  return (
    <div className="sound-energy-item">
      <div className="icon-box" style={{ backgroundColor: iconBoxColor }}>
        <IconComponent style={{ color: iconColor, fontSize: "20px" }} />
      </div>
      <p>{title}</p>
      <h2 className="sound-energy-response">{response}</h2>
      {addProgressBar ? (
        fetchedDummyDifference < 0 ? (
          <div className="percentage-difference-container">
            <FaArrowDown className="percentage-difference-icon" />
            <p>{Math.abs(fetchedDummyDifference)}% since last month</p>
          </div>
        ) : (
          <div className="percentage-difference-container">
            <FaArrowUp className="percentage-difference-icon" />
            <p>{Math.abs(fetchedDummyDifference)}% since last month</p>
          </div>
        )
      ) : null}
    </div>
  );
}
