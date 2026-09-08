import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIConsultant from './components/AIConsultant';
import NearbyClinics from './components/NearbyClinics'; // <--- Yangi import
import Services from './components/Services';
import Doctors from './components/Doctors';
import Grooming from './components/Grooming';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenBooking = (serviceName) => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar />
        <Hero onOpenBooking={handleOpenBooking} />
        
        {/* AI Vrach va Klinika Qidirish Bo'limi */}
        <div id="ai-consultant">
          <AIConsultant onOpenBooking={handleOpenBooking} />
        </div>

        {/* <--- ENG YAQIN KLINIKALAR BO'LIMI --- */}
        <div id="nearby-clinics">
          <NearbyClinics onOpenBooking={handleOpenBooking} />
        </div>

        <Services onOpenBooking={handleOpenBooking} />
        
        <div id="doctors">
          <Doctors onOpenBooking={handleOpenBooking} />
        </div>
        
        <div id="grooming">
          <Grooming onOpenBooking={handleOpenBooking} />
        </div>
      </div>
      <Footer />

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        serviceName={selectedService}
      />
    </div>
  );
}