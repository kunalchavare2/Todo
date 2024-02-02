import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./AddBtn.scss";

const AddBtn = ({ className }) => {
  const navigate = useNavigate();

  return (
    <button
      className={`${className ?? className} addbtn`}
      onClick={() => navigate("addtask/0")}
    >
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
};

export default AddBtn;
