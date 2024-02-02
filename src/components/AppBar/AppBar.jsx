import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./AppBar.scss";

const AppBar = ({ title, back = true }) => {
  const navigate = useNavigate();
  return (
    <div className="appbar">
      {back && (
        <button className="appbar__backBtn" onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      )}

      <span className="addtask__header__task">{title}</span>
    </div>
  );
};

export default AppBar;
