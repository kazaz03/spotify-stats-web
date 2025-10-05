import { NavLink, Outlet } from "react-router-dom";
import FilterButton from "../components/FilterButton";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Music() {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleClick(id) {
    setSearchParams({ time: id });
  }
  const currentSearch = searchParams.toString()
    ? `?${searchParams.toString()}`
    : "";
  return (
    <div className="music-page-container">
      <div className="music-page-title">
        <h1>Star Gallery</h1>
        <p>Explore your musical history through the stars</p>
      </div>
      <div className="top-choice-container">
        <NavLink to={{ pathname: "toptracks", search: currentSearch }}>
          {({ isActive }) => (
            <div className={`top-nav-el ${isActive ? "active-el" : ""}`}>
              <span
                className={`top-nav-el-link ${isActive ? "active-link" : ""}`}
              >
                Top tracks
              </span>
            </div>
          )}
        </NavLink>
        <NavLink to={{ pathname: "topartists", search: currentSearch }}>
          {({ isActive }) => (
            <div className={`top-nav-el ${isActive ? "active-el" : ""}`}>
              <span
                className={`top-nav-el-link ${isActive ? "active-link" : ""}`}
              >
                Top artists
              </span>
            </div>
          )}
        </NavLink>
      </div>
      <div className="filter-buttons-container">
        <FilterButton
          handleClick={handleClick}
          name="This week"
          id="week"
          selected={searchParams.get("time") === "week"}
        />
        <FilterButton
          handleClick={handleClick}
          name="This month"
          id="month"
          selected={searchParams.get("time") === "month"}
        />
        <FilterButton
          handleClick={handleClick}
          name="6 months"
          id="6months"
          selected={searchParams.get("time") === "6months"}
        />
        <FilterButton
          handleClick={handleClick}
          name="All time"
          id="all"
          selected={searchParams.get("time") === "all"}
        />
      </div>
      <Outlet />
    </div>
  );
}
