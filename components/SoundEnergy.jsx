import SoundEnergyItem from "./SoundEnergyItem";
import { PiMusicNoteSimple } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

export default function SoundEnergy() {
  return (
    <div className="sound-energy-container">
      <h2>Insight Into Your Sound Energy</h2>
      <div className="sound-energy-items-container">
        <SoundEnergyItem
          icon={PiMusicNoteSimple}
          iconColor={"yellow"}
          iconBoxColor={"rgba(255,255,0,0.2)"}
          title={"Top genre of the week"}
          response={"Electronic"}
        />
        <SoundEnergyItem
          icon={FaRegClock}
          iconColor={"#1db954"}
          iconBoxColor={"rgba(29, 185, 84, 0.25)"}
          title={"Listening time this month"}
          response={"47h"}
        />
        <SoundEnergyItem
          icon={FaArrowTrendUp}
          iconColor={"#00FFFF"}
          iconBoxColor={"rgba(77, 250, 255, 0.25)"}
          title={"Discovered artists this week"}
          response={12}
        />
        <SoundEnergyItem
          icon={FaRegHeart}
          iconColor={"rgba(253, 187, 45, 1)"}
          iconBoxColor={"rgba(232, 209, 159, 0.3)"}
          title={"Your music pulse"}
          response={"128 BPM"}
        />
      </div>
    </div>
  );
}
