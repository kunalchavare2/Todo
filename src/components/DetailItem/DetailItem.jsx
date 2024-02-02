import React from "react";
import "./DetailItem.scss";
import StatusPill from "../StatusPill/StatusPill";

const DetailItem = ({ label, value }) => {
  return (
    <div className="detailItem">
      <span className="detailItem__label">{label}</span>
      <span className="detailItem__value">
        {label === "type" ? <StatusPill type={value} /> : value}
      </span>
    </div>
  );
};

export default DetailItem;
