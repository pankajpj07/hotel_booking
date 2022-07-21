import React from "react";
import "./Header.css";
import { HEADER_LOGO_TEXT, HEADER_LOGO_PATH } from "../constants";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={HEADER_LOGO_PATH} alt="hotel-logo" />
      </div>
      <h1 className="header-text">{HEADER_LOGO_TEXT}</h1>
    </div>
  );
}

export default Header;
