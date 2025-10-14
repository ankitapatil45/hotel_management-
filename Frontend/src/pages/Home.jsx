import React, { useState } from "react";
import { Calendar, MapPin, Star, Clock, CreditCard, Gift, Users, Phone, Mail, Award } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-amber-600">Hotel Miranda</div>
          
          
          
          <button className="hidden md:block bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full transition">
            Book Now
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-gray-700"></span>
              <span className="block w-6 h-0.5 bg-gray-700"></span>
              <span className="block w-6 h-0.5 bg-gray-700"></span>
            </div>
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4">
            <a href="#home" className="block text-gray-700 hover:text-amber-600">Home</a>
            <a href="#rooms" className="block text-gray-700 hover:text-amber-600">Rooms</a>
            <a href="#about" className="block text-gray-700 hover:text-amber-600">About</a>
            <a href="#facilities" className="block text-gray-700 hover:text-amber-600">Facilities</a>
            <a href="#contact" className="block text-gray-700 hover:text-amber-600">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-left text-white max-w-3xl">
        <div className="mb-4 inline-block">
          <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            ⭐ 5-Star Luxury Hotel
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Welcome to<br />
          <span className="text-amber-400">Hotel Miranda</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
          Experience unparalleled luxury and comfort in the heart of paradise. Your perfect escape awaits.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition transform hover:scale-105 shadow-xl">
            Explore Rooms
          </button>
          <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition border-2 border-white">
            View Gallery
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

const QuickBooking = () => {
  const [bookingData, setBookingData] = useState({
    checkin: '',
    checkout: '',
    guests: '1',
    roomType: ''
  });

  const handleSubmit = () => {
    alert('✅ Booking request submitted! We will contact you shortly.');
  };

  return (
    <div className="relative -mt-20 z-20 container mx-auto px-6">
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
        <div className="grid md:grid-cols-5 gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-2">Check-in</label>
            <input 
              type="date" 
              value={bookingData.checkin}
              onChange={(e) => setBookingData({...bookingData, checkin: e.target.value})}
              className="border-2 border-gray-200 rounded-lg p-3 focus:border-amber-500 focus:outline-none" 
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-2">Check-out</label>
            <input 
              type="date" 
              value={bookingData.checkout}
              onChange={(e) => setBookingData({...bookingData, checkout: e.target.value})}
              className="border-2 border-gray-200 rounded-lg p-3 focus:border-amber-500 focus:outline-none" 
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-2">Guests</label>
            <select 
              value={bookingData.guests}
              onChange={(e) => setBookingData({...bookingData, guests: e.target.value})}
              className="border-2 border-gray-200 rounded-lg p-3 focus:border-amber-500 focus:outline-none"
            >
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4+ Guests</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-2">Room Type</label>
            <select 
              value={bookingData.roomType}
              onChange={(e) => setBookingData({...bookingData, roomType: e.target.value})}
              className="border-2 border-gray-200 rounded-lg p-3 focus:border-amber-500 focus:outline-none"
            >
              <option value="">Select Room</option>
              <option>Single Room</option>
              <option>Double Room</option>
              <option>Suite</option>
              <option>Deluxe Suite</option>
            </select>
          </div>
          <div className="flex items-end">
            <button 
              onClick={handleSubmit}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition transform hover:scale-105"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80"
                alt="Luxury Room"
                className="rounded-2xl shadow-xl w-full h-64 object-cover transform hover:scale-105 transition duration-500"
              />
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
                alt="Hotel Interior"
                className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8 transform hover:scale-105 transition duration-500"
              />
              <div className="col-span-2 bg-gradient-to-br from-amber-500 to-amber-600 text-white p-8 rounded-2xl shadow-xl">
                <Award className="w-12 h-12 mb-4" />
                <h3 className="font-bold text-2xl mb-3">Award-Winning Service</h3>
                <p className="text-amber-100">
                  Recognized globally for excellence in hospitality and guest satisfaction
                </p>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
          </div>
          
          <div>
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
              Discover Luxury<br />Redefined
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Welcome to Hotel Miranda, where extraordinary experiences meet timeless elegance. Nestled in the heart of paradise, our hotel offers an unparalleled escape from the ordinary.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              With world-class amenities, stunning architecture, and personalized service, we create unforgettable moments for every guest. From business travelers to vacationing families, we cater to your every need.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">250+</div>
                <div className="text-gray-600 text-sm">Luxury Rooms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">15+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">50K+</div>
                <div className="text-gray-600 text-sm">Happy Guests</div>
              </div>
            </div>
            
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-full transition transform hover:scale-105 shadow-lg">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
    
  );
};

const Facilities = () => {
  const features = [
    { icon: <Star className="w-8 h-8" />, title: "High Ratings", desc: "Consistently rated 5-stars by our valued guests worldwide" },
    { icon: <Clock className="w-8 h-8" />, title: "24/7 Service", desc: "Round-the-clock assistance for all your needs" },
    { icon: <MapPin className="w-8 h-8" />, title: "Prime Location", desc: "Strategic location with easy access to attractions" },
    { icon: <Gift className="w-8 h-8" />, title: "Free Cancellation", desc: "Flexible booking with hassle-free cancellations" },
    { icon: <CreditCard className="w-8 h-8" />, title: "Multiple Payments", desc: "Convenient payment options for your comfort" },
    { icon: <Users className="w-8 h-8" />, title: "Special Offers", desc: "Exclusive deals and packages for our guests" }
  ];

  return (
    <section id="facilities" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Facilities</span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
          World-Class Amenities
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
          Experience premium facilities designed to make your stay extraordinary
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-amber-500 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section id="rooms" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Gallery</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Explore Our Spaces
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Immerse yourself in the elegance and sophistication of Hotel Miranda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer h-72"
            >
              <img 
                src={img} 
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-xl mb-2">Luxury Experience</h3>
                  <p className="text-sm text-gray-200">Discover comfort and elegance</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert(`✅ Subscribed successfully with ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Hotel Miranda</h3>
            <p className="text-gray-400 leading-relaxed">
              Your gateway to luxury and comfort. Experience hospitality redefined.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-amber-400 transition">About Us</a></li>
              <li><a href="#rooms" className="hover:text-amber-400 transition">Rooms</a></li>
              <li><a href="#facilities" className="hover:text-amber-400 transition">Facilities</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@hotelmiranda.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>123 Paradise Street, City</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe for exclusive offers</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-500"
              />
              <button 
                onClick={handleSubscribe}
                className="bg-amber-500 hover:bg-amber-600 px-6 py-2 rounded-r-lg transition"
              >
                →
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Hotel Miranda. All rights reserved. Crafted with excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="bg-b">
      <Navbar />
      <Hero />
      <QuickBooking />
      <About />
      <Gallery />
      <Facilities />
      <Footer />
    </div>
  );
}