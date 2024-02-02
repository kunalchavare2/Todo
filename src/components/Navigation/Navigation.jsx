import React, { useState } from "react";
import AddBtn from "./../AddBtn/AddBtn";
import "./Navigation.scss";
import Calender from "../../assets/icons/calendar.svg";
import Home from "../../assets/icons/home.svg";
import Important from "../../assets/icons/star.svg";
import Setting from "../../assets/icons/setting.svg";
import { useNavigate } from "react-router-dom";

const Navigation = ({ className }) => {
  const [navItem, setNavItem] = useState("Home");
  const navigate = useNavigate();

  function changeNav(ev, item) {
    setNavItem(item);

    switch (item.toLowerCase()) {
      case "home":
        navigate(`../`);
        break;
      default:
        navigate(`../${item.toLowerCase()}`);
        break;
    }
  }
  return (
    <ul className={`${className ?? className} navigation`}>
      <li className="navigation__item">
        <button
          className={`navigation__item__btn ${navItem === "Home" && "active"}`}
          onClick={(ev) => changeNav(ev, "Home")}
        >
          <img src={Home} alt="home icon" />
          <span>Home</span>
        </button>
      </li>
      <li className="navigation__item">
        <button
          className={`navigation__item__btn ${navItem === "tasks" && "active"}`}
          onClick={(ev) => changeNav(ev, "tasks")}
        >
          <img src={Calender} alt="calender icon" /> <span>Tasks</span>
        </button>
      </li>
      <li className="navigation__item">
        <AddBtn className="navigation__addBtn" />
      </li>
      <li className="navigation__item">
        <button
          className={`navigation__item__btn ${
            navItem === "important" && "active"
          }`}
          onClick={(ev) => changeNav(ev, "important")}
        >
          <img src={Important} alt="star icon" /> <span>Important</span>
        </button>
      </li>
      <li className="navigation__item">
        <button
          className={`navigation__item__btn ${
            navItem === "Setting" && "active"
          }`}
          onClick={(ev) => changeNav(ev, "settings")}
        >
          <img src={Setting} alt="setting icon" /> <span>Settings</span>
        </button>
      </li>
    </ul>
  );
};

export default Navigation;
