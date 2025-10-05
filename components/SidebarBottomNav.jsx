import { IoSettingsOutline } from "react-icons/io5";
import InitialsPhoto from "/initials-pic.jpg";
import { NavLink } from "react-router-dom";
import useWindowWidth from "../src/hooks/useWindowWidth";

export default function SidebarBottomNav() {
  const width = useWindowWidth();
  return (
    <nav className="sidebar-nav bottom-nav">
      <div className="profile-part">
        <div className="profile-pic-container">
          <img className="profile-pic" src={InitialsPhoto}></img>
        </div>
        {width > 768 && (
          <div className="profile-info-part">
            <h3>Name Surname</h3>
            <p>User type</p>
          </div>
        )}
      </div>
      <NavLink to="/settings">
        {({ isActive }) => (
          <div className={`sidebar-nav-el ${isActive ? "active-el" : ""}`}>
            <div className={`nav-el-icon-box ${isActive ? "active-icon" : ""}`}>
              <IoSettingsOutline
                className={`nav-el-icon ${isActive ? "active-icon" : ""}`}
              />
            </div>
            {width > 768 && (
              <span
                className={`nav-el-link-settings ${
                  isActive ? "active-link" : ""
                }`}
              >
                Settings
              </span>
            )}
          </div>
        )}
      </NavLink>
    </nav>
  );
}
