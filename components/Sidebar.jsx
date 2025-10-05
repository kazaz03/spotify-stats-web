import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import LogoPart from "./LogoPart";
import { FaHome } from "react-icons/fa";
import { FaItunesNote } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import NavItem from "./NavItem";
import SidebarBottomNav from "./SidebarBottomNav";
import useWindowWidth from "../src/hooks/useWindowWidth";

export default function Sidebar() {
  //ovdje trebam da preuzmem informacije o profilu koje sam
  // dobila pri prijavi da bi prikazala username
  const width = useWindowWidth();
  return (
    <div className="sidebar">
      <LogoPart />
      {width > 768 && <p className="nav-title">MUSIC GALAXY</p>}

      <nav className="sidebar-nav">
        <NavItem path="/home" icon={FaHome} name="Home" />
        <NavItem path="/music" icon={FaItunesNote} name="Music" />
        <NavItem path="/top" icon={FaHeadphonesAlt} name="Podcasts" />
        <NavItem path="/profile" icon={FaRegUser} name="Profile" />
      </nav>
      <SidebarBottomNav />
    </div>
  );
}
