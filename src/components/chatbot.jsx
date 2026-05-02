// Chatbot.jsx
import React, { useEffect, useRef, useState } from "react";
import { rules } from "./Chatrules";

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! Welcome to Ecran Online store. How can I help you?" }
  ]);
  const [input, setInput] = useState("");
  const boxRef = useRef(null);

  // Get response based on rules
  const getBotResponse = (text) => {
    const lower = text.toLowerCase();
    for (let rule of rules) {
      if (rule.pattern.test(lower)) {
        const responses = rule.responses;
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    return "Sorry, I didn't understand that.";
  };

  // Scroll to bottom when messages update
  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate slight delay for bot reply
    setTimeout(() => {
      const reply = getBotResponse(input);
      const botMessage = { sender: "bot", text: reply };
      setMessages((prev) => [...prev, botMessage]);
    }, 300);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 90,
        left: 20,
        width: 320,
        maxWidth: "calc(100% - 40px)",
        zIndex: 9999
      }}
    >
      <div className="card shadow" style={{ borderRadius: 12 }}>
        {/* Header */}
        <div
          className="card-header d-flex justify-content-between align-items-center"
          style={{
            background: "#2C9F45",
            color: "white",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12
          }}
        >
          <div>
            <strong>Ecran Online Assistant</strong>
            <div style={{ fontSize: 12, opacity: 0.9 }}>
              Ask about products, orders or prices
            </div>
          </div>
          <div>
            <button
              className="btn btn-sm btn-light"
              onClick={onClose}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Body */}
        <div
          className="card-body p-2"
          style={{
            height: 280,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column"
          }}
        >
          {/* Messages */}
          <div ref={boxRef} style={{ overflowY: "auto", padding: 8, flex: 1 }}>
            {messages.map((msg, idx) => (  // ✅ Fix 1: removed hyperlink wrapping
              <div
                key={idx}
                className={`d-flex mb-2 ${
                  msg.sender === "user"
                    ? "justify-content-end"
                    : "justify-content-start"
                }`}
              >
                <div
                  style={{
                    padding: "8px 12px",
                    borderRadius: 12,
                    maxWidth: "75%",
                    background: msg.sender === "user" ? "#28a745" : "#f1f1f1",
                    color: msg.sender === "user" ? "#fff" : "#000",
                    fontSize: 14
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="d-flex mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}  // ✅ Fix 2: removed hyperlink wrapping
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              style={{ borderRadius: 8 }}
            />
            <button
              className="btn btn-success ms-2"  // ✅ Fix 3: class → className
              onClick={sendMessage}
              style={{ borderRadius: 8 }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;