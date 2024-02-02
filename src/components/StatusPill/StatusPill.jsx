import React from "react";
import "./StatusPill.scss";
import StatusPillEnum from "./../../helpers/enum/StatusPillEnum";

const StatusPill = ({ type }) => {
  return (
    <>
      {type === StatusPillEnum.Todo && (
        <span className="status status__todo">{type}</span>
      )}
      {type === StatusPillEnum.Done && (
        <span className="status status__done">{type}</span>
      )}
      {type === StatusPillEnum.InProgress && (
        <span className="status status__inprogress">{type}</span>
      )}
    </>
  );
};

export default StatusPill;
