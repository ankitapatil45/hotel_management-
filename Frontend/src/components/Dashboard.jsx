import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; 

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/login");
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>
        <ul className="menu-list">
          <li onClick={() => handleNavigation("/admin/hotels")}>🏨 Manage Hotels Data</li>
          <li onClick={() => handleNavigation("/admin/users")}>👥 Manage Staff</li>
          <li onClick={() => handleNavigation("/admin/rooms")}>🛏️ Manage Rooms</li>
          <li onClick={() => handleNavigation("/admin/payments")}>💳 Manage Payments</li>
        </ul>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome, Admin 👋</h1>
        <p>You are successfully logged in!</p>
        <div className="admin-info">
          <h2>Admin Panel – Manage hotel data, users, rooms, and payments.</h2>
          <p>Use the menu on the left to manage different sections.</p>
        </div>
      </div>
    </div>
  );
}
