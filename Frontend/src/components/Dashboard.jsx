import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // JWT tokens काढून टाका
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/login"); // लॉगिन पेजवर redirect
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>Welcome, Admin 👋</h1>
      <p>You are successfully logged in!</p>
      <button
        onClick={handleLogout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          border: "none",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}
