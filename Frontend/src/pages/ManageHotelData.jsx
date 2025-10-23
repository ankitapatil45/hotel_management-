import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminPages.css";

export default function ManageHotelData() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const res = await axios.get(
        "http://127.0.0.1:8000/api/bookings/",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setBookings(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setLoading(false);
    }
  };

  return (
    <div className="admin-page">
      <h1>🏨 Manage Hotel Data</h1>
      <p>All guest bookings are displayed below:</p>

      {loading ? (
        <p>Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Guests</th>
              <th>Room Type</th>
              
              
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td>{b.phone}</td>
                <td>{b.check_in}</td>
                <td>{b.check_out}</td>
                <td>{b.guests}</td>
                <td>{b.room_type}</td>
                
                
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
