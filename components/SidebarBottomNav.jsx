import { IoSettingsOutline } from "react-icons/io5";
import InitialsPhoto from "/initials-pic.jpg";
import { NavLink } from "react-router-dom";

export default function SidebarBottomNav() {
  return (
    <nav className="sidebar-nav bottom-nav">
      <div className="profile-part">
        <div className="profile-pic-container">
          <img className="profile-pic" src={InitialsPhoto}></img>
        </div>
        <div className="profile-info-part">
          <h3>Name Surname</h3>
          <p>User type</p>
        </div>
      </div>
      <NavLink to="/settings">
        {({ isActive }) => (
          <div className={`sidebar-nav-el ${isActive ? "active-el" : ""}`}>
            <div className={`nav-el-icon-box ${isActive ? "active-icon" : ""}`}>
              <IoSettingsOutline
                className={`nav-el-icon ${isActive ? "active-icon" : ""}`}
              />
            </div>
            <span
              className={`nav-el-link-settings ${
                isActive ? "active-link" : ""
              }`}
            >
              Settings
            </span>
          </div>
        )}
      </NavLink>
    </nav>
  );
}
