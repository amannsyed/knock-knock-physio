
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import AdminDashboard from './components/AdminDashboard';
import LoginModal from './components/LoginModal';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import Affiliations from './components/Affiliations';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const openBooking = () => setIsBookingOpen(true);

  const handleAdminClick = () => {
    if (isAdmin) {
      setIsAdmin(false);
      // Optional: Add a toast notification here
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };

  if (isAdmin) {
    return (
      <div className="min-h-screen bg-slate-100">
        <Header onBookClick={() => {}} isAdmin={true} onLogout={handleLogout} />
        <AdminDashboard onLogout={handleLogout} />
        <Footer onBookClick={() => {}} isAdmin={isAdmin} onAdminClick={handleAdminClick} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light">
      <Header onBookClick={openBooking} />
      <main>
        <Hero onBookClick={openBooking} />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <Affiliations />
        <Pricing />
        <Testimonials />
        <Faq />
        <About />
        <Contact />
      </main>
      <Footer onBookClick={openBooking} isAdmin={isAdmin} onAdminClick={handleAdminClick} />
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        isAdmin={false} 
      />

      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={() => setIsAdmin(true)}
      />
    </div>
  );
};

export default App;
