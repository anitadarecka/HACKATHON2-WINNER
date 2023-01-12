/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import home from "@assets/icons/home2.png";
import calendar from "@assets/icons/calendar.png";
import account from "@assets/icons/account.png";
import message from "@assets/icons/message.png";
import { useChat } from "../contexts/chatContext";

function Navbar() {
  const { showChat, setShowChat } = useChat();
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <NavLink to="/">
          <li className="navbar__items">
            <img src={home} alt="" className="navbar__icons" />
          </li>
        </NavLink>
        <li className="navbar__items">
          <img src={calendar} alt="" className="navbar__icons" />
        </li>
        <NavLink to="/login">
          <li className="navbar__items small">
            <img src={account} alt="" className="navbar__icons" />
          </li>
        </NavLink>
        <li className="navbar__items">
          <img
            src={message}
            alt=""
            className="navbar__icons"
            onClick={() => setShowChat(!showChat)}
          />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
