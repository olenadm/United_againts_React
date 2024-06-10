import React from "react";
import logo from "../img/logo-footer.png"
import bot_logo from "../img/bot_logo.png"

export default function Footer() {
  return (
    <footer>
    <div className="container">
      <div>
        <img
          src={logo}
          alt="United Against Online Abuse"
          title="United Against Online Abuse"
          role="presentation"
        />
        <p>&copy; 2024 United Against Online Abuse.</p>
      </div>
      <div>
        <img
          src={bot_logo}
          alt="United Against Online Abuse"
          title="United Against Online Abuse Logo"
          role="presentation"
        />
      </div>
    </div>
  </footer>
  );
}
