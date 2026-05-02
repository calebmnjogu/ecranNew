// ChatToggleButton.jsx
import React from "react";

const ChatToggleButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn shadow"
      style={{
        position: "fixed",
        bottom: 20,
        left: 20,
        borderRadius: "50%",
        width: 60,
        height: 60,
        zIndex: 9998,
        background: "#28a745",
        color: "#fff",
        border: "none"
      }}
      aria-label="Open chat"
    >
      <i className="bi bi-chat-dots-fill" style={{ fontSize: 22 }} />
    </button>
  );
};

export default ChatToggleButton;