import logo from "/logo.png";
import useWindowWidth from "../src/hooks/useWindowWidth";

export default function LogoPart() {
  const width = useWindowWidth();
  return (
    <div className="logo-part">
      <img src={logo} />
      {width > 768 && (
        <div className="logo-description">
          <h3>Spotify Galaxy</h3>
          <p>Your music universe</p>
        </div>
      )}
    </div>
  );
}
