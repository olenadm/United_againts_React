import React from "react";
import logo from "../img/logo-footer.png";
import bot_logo from "../img/bot_logo.png";

export default function Footer() {
  const title="United Against Online Abuse";
  return (
    <footer>
      <div className="container">
        <div>
          <img
            src={logo}
            alt={title}
            title={title}
            role="presentation"
          />
          <p>&copy; 2024 United Against Online Abuse.</p>
        </div>
        <div>
          <img
            src={bot_logo}
            alt={title}
            title={title}
            role="presentation"
          />
        </div>
      </div>
    </footer>
  );
}
