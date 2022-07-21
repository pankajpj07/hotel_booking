import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./SideBar.css";

function SideBar() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add-booking">Add Booking</Link>
        </li>
        <li>
          <Link to="/check-room">Check Room</Link>
        </li>
        <Outlet />
      </ul>
    </>
  );
}

export default SideBar;
