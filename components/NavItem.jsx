import { NavLink } from "react-router-dom";
import { FaCircle } from "react-icons/fa";

export default function NavItem({ path, icon: IconComponent, name }) {
  const shouldApplyEnd = path === "/home";
  return (
    <NavLink to={path} end={shouldApplyEnd}>
      {({ isActive }) => (
        <div className={`sidebar-nav-el ${isActive ? "active-el" : ""}`}>
          <div className={`nav-el-icon-box ${isActive ? "active-icon" : ""}`}>
            <IconComponent
              className={`nav-el-icon ${isActive ? "active-icon" : ""}`}
            />
          </div>
          <span className={`nav-el-link ${isActive ? "active-link" : ""}`}>
            {name}
          </span>
          {isActive ? <FaCircle className="active-el-circle" /> : null}
        </div>
      )}
    </NavLink>
  );
}
