import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import { NotificationWrapper } from "./style";

export const Notification: React.FC<{
  title: string;
  message: string;
  clickable?: boolean;
  style?: React.CSSProperties;
  onClick?: () => {};
}> = ({ title, message, onClick, clickable, style }) => {
  return (
    <NotificationWrapper style={style}>
      {clickable && onClick ? (
        <button onClick={onClick}>
          <FaTimesCircle size="16" />
        </button>
      ) : null}
      <div
        style={{ display: "flex", flexDirection: "column", marginLeft: "15px" }}
      >
        <div>
          <h4>{title}</h4>
        </div>
        <div style={{ color: "#878787" }}>{message}</div>
      </div>
    </NotificationWrapper>
  );
};
