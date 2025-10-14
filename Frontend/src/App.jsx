import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedHotels from "./components/FeaturedHotels";
import WhyChooseUs from "./components/WhyChooseUs";
import ExclusiveOffers from "./components/ExclusiveOffers";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import BookingForm from "./components/BookingForm";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Login from "./components/Login"; // ✅ Login component import
import Dashboard from "./components/Dashboard"; // ✅ Dashboard import
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ Protected route import

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <div className="font-sans">
              <Hero />
              <FeaturedHotels />
              <WhyChooseUs />
              <ExclusiveOffers />
              <Newsletter />
              <BookingForm />
              <Testimonials />
              <AboutUs />
              <Footer />
            </div>
          }
        />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
