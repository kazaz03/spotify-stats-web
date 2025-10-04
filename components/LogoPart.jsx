import logo from "/logo.png";

export default function LogoPart() {
  return (
    <div className="logo-part">
      <img src={logo} />
      <div className="logo-description">
        <h3>Spotify Galaxy</h3>
        <p>Your music universe</p>
      </div>
    </div>
  );
}
