
import React, { useState, useEffect } from 'react';
import { UK_PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  isAdmin: boolean;
}

interface BookingDetails {
    name: string;
    address: string;
    issue: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, isAdmin }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookedSlots, setBookedSlots] = useState<Record<string, string[]>>({});
  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  const [step, setStep] = useState<1 | 2>(1);
  const [details, setDetails] = useState<BookingDetails>({ name: '', address: '', issue: '' });

  // Hourly session slots (9:00 to 17:00, last slot starts at 16:00)
  const times = [
    '09:00', '10:00', '11:00', '12:00', 
    '13:00', '14:00', '15:00', '16:00'
  ];

  // Initialize dates and fake existing bookings
  useEffect(() => {
    if (isOpen) {
      setStep(1); // Reset step on open
      setDetails({ name: '', address: '', issue: '' });
      setSelectedTime(null);

      const dates: Date[] = [];
      const today = new Date();
      let daysAdded = 0;
      let dayOffset = 0;

      // Generate next 14 available days (Mon-Sat)
      while (daysAdded < 14) {
        const date = new Date(today);
        date.setDate(today.getDate() + dayOffset);
        const dayOfWeek = date.getDay(); // 0 is Sunday

        // Skip Sunday (0)
        if (dayOfWeek !== 0) {
          dates.push(date);
          daysAdded++;
        }
        dayOffset++;
      }
      setAvailableDates(dates);
      
      if (!selectedDate) {
          setSelectedDate(dates[0]); // Default to first available day
      }

      // Load bookings from local storage
      const storedBookings = localStorage.getItem('kkp_bookings');
      const realBookings = storedBookings ? JSON.parse(storedBookings) : {};

      // Ensure we have some data structure
      setBookedSlots(realBookings);
    }
  }, [isOpen]);

  // Admin: Toggle slot availability
  const toggleSlot = (date: Date, time: string) => {
      const dateKey = date.toISOString().split('T')[0];
      const newBookings = { ...bookedSlots };
      
      if (!newBookings[dateKey]) {
          newBookings[dateKey] = [];
      }

      if (newBookings[dateKey].includes(time)) {
          // Unblock
          newBookings[dateKey] = newBookings[dateKey].filter(t => t !== time);
      } else {
          // Block
          newBookings[dateKey].push(time);
      }

      setBookedSlots(newBookings);
      localStorage.setItem('kkp_bookings', JSON.stringify(newBookings));
  };

  const handleNextStep = () => {
      if (selectedDate && selectedTime) {
          setStep(2);
      }
  };

  const handleBack = () => {
      setStep(1);
  };

  const generateMessage = () => {
    if (!selectedDate || !selectedTime) return '';
    const dateString = selectedDate.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
    return `*New Appointment Request*
------------------------
*Name:* ${details.name}
*Date:* ${dateString}
*Time:* ${selectedTime}
*Address:* ${details.address}
*Issue:* ${details.issue}
------------------------`;
  };

  const handleWhatsAppRequest = () => {
    if (selectedDate && selectedTime) {
      const message = generateMessage() + '\nPlease confirm availability.';
      const url = `https://wa.me/${UK_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
      onClose();
    }
  };

  const handleEmailRequest = () => {
    if (selectedDate && selectedTime) {
      const dateString = selectedDate.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
      const subject = `Appointment Request: ${details.name} - ${dateString}`;
      // Remove markdown asterisks for email body
      const body = generateMessage().replace(/\*/g, '') + '\n\nPlease confirm availability.';
      
      const url = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = url;
      onClose();
    }
  };

  const isSlotBooked = (date: Date, time: string) => {
    const dateKey = date.toISOString().split('T')[0];
    return bookedSlots[dateKey]?.includes(time);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className={`bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh] transition-all duration-300 ${isAdmin ? 'border-4 border-red-500' : ''}`}>
        
        {/* Header */}
        <div className={`${isAdmin ? 'bg-red-600' : 'bg-primary'} p-6 flex justify-between items-center text-white transition-colors duration-300`}>
          <div>
            <h2 className="text-2xl font-bold">{isAdmin ? 'Admin Mode' : 'Book Appointment'}</h2>
            <p className="text-white/80 text-sm mt-1">
                {isAdmin ? 'Manage availability slots' : 'Request a 1-hour home visit session'}
            </p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto flex-grow">
          
          {step === 1 && (
              <>
                {/* Date Selection */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Date</h3>
                    <div className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide">
                    {availableDates.map((date) => {
                        const isSelected = selectedDate?.toDateString() === date.toDateString();
                        return (
                        <button
                            key={date.toISOString()}
                            onClick={() => { setSelectedDate(date); setSelectedTime(null); }}
                            className={`flex-shrink-0 w-20 h-24 rounded-xl flex flex-col items-center justify-center transition-all duration-200 border-2 ${
                            isSelected 
                                ? `${isAdmin ? 'border-red-500 bg-red-50 text-red-700' : 'border-primary bg-primary/10 text-primary-focus'} transform scale-105` 
                                : 'border-gray-100 hover:border-gray-300 text-secondary'
                            }`}
                        >
                            <span className="text-xs font-medium uppercase">{date.toLocaleDateString('en-GB', { weekday: 'short' })}</span>
                            <span className="text-2xl font-bold my-1">{date.getDate()}</span>
                            <span className="text-xs">{date.toLocaleDateString('en-GB', { month: 'short' })}</span>
                        </button>
                        );
                    })}
                    </div>
                </div>

                {/* Time Selection */}
                {selectedDate && (
                    <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        {isAdmin ? 'Toggle Availability' : 'Select Session'} 
                        <span className="text-sm font-normal text-gray-500 ml-2">
                             ({selectedDate.toLocaleDateString('en-GB', { weekday: 'long', month: 'long', day: 'numeric' })})
                        </span>
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {times.map((time) => {
                        const booked = isSlotBooked(selectedDate, time);
                        const isSelected = selectedTime === time;
                        const startHour = parseInt(time.split(':')[0]);
                        const endTime = `${startHour + 1}:00`;

                        return (
                            <button
                            key={time}
                            onClick={() => {
                                if (isAdmin) {
                                    toggleSlot(selectedDate, time);
                                } else if (!booked) {
                                    setSelectedTime(time);
                                }
                            }}
                            disabled={!isAdmin && booked}
                            className={`py-3 px-3 rounded-lg text-sm font-semibold transition-all duration-200 flex flex-col items-center justify-center gap-1 border ${
                                isAdmin 
                                    ? booked 
                                        ? 'bg-red-100 border-red-500 text-red-700' // Admin: Booked state
                                        : 'bg-green-50 border-green-500 text-green-700' // Admin: Available state
                                    : booked
                                        ? 'bg-gray-100 border-gray-100 text-gray-400 cursor-not-allowed decoration-slice' // User: Booked state
                                        : isSelected
                                            ? 'bg-primary border-primary text-white shadow-md transform scale-105' // User: Selected state
                                            : 'bg-white border-gray-200 text-gray-700 hover:border-primary hover:text-primary' // User: Available state
                            }`}
                            >
                            <span className={`text-base ${(!isAdmin && booked) ? 'line-through' : ''}`}>{time} - {endTime}</span>
                            {isAdmin && <span className="text-[10px] font-bold uppercase">{booked ? 'Blocked' : 'Available'}</span>}
                            {!isAdmin && booked && <span className="text-[10px] font-normal text-red-400">Unavailable</span>}
                            </button>
                        );
                        })}
                    </div>
                    </div>
                )}
              </>
          )}

          {step === 2 && !isAdmin && (
              <div className="animate-fadeIn">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Your Details</h3>
                  <div className="space-y-4">
                      <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <input 
                              type="text" 
                              value={details.name}
                              onChange={(e) => setDetails({...details, name: e.target.value})}
                              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow"
                              placeholder="e.g. John Doe"
                          />
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Home Address</label>
                          <textarea 
                              value={details.address}
                              onChange={(e) => setDetails({...details, address: e.target.value})}
                              rows={2}
                              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow"
                              placeholder="Street, Postcode..."
                          />
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Reason for Visit / Symptoms</label>
                          <textarea 
                              value={details.issue}
                              onChange={(e) => setDetails({...details, issue: e.target.value})}
                              rows={3}
                              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow"
                              placeholder="e.g. Lower back pain, post-surgery rehab..."
                          />
                      </div>
                  </div>
              </div>
          )}

        </div>

        {/* Footer Buttons */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row justify-end gap-3">
            {step === 1 ? (
                <>
                    <button 
                        onClick={onClose}
                        className="px-6 py-2.5 rounded-full text-secondary font-medium hover:bg-gray-200 transition-colors"
                    >
                        {isAdmin ? 'Close' : 'Cancel'}
                    </button>
                    {!isAdmin && (
                        <button 
                            onClick={handleNextStep}
                            disabled={!selectedTime || !selectedDate}
                            className={`px-8 py-2.5 rounded-full font-bold text-white shadow-md transition-all duration-300 flex items-center justify-center gap-2 ${
                            !selectedTime || !selectedDate 
                                ? 'bg-gray-300 cursor-not-allowed' 
                                : 'bg-primary hover:bg-primary-focus hover:shadow-lg transform hover:-translate-y-0.5'
                            }`}
                        >
                            Next
                        </button>
                    )}
                </>
            ) : (
                <div className="w-full flex flex-col sm:flex-row gap-3 justify-end items-center">
                     <button 
                        onClick={handleBack}
                        className="w-full sm:w-auto order-3 sm:order-1 px-6 py-2.5 rounded-full text-secondary font-medium hover:bg-gray-200 transition-colors"
                    >
                        Back
                    </button>
                    
                    {/* Email Button */}
                    <button 
                        onClick={handleEmailRequest}
                        disabled={!details.name || !details.address || !details.issue}
                        className={`w-full sm:w-auto order-2 px-6 py-2.5 rounded-full font-bold text-white shadow-md transition-all duration-300 flex items-center justify-center gap-2 ${
                        !details.name || !details.address || !details.issue
                            ? 'bg-gray-300 cursor-not-allowed' 
                            : 'bg-primary hover:bg-primary-focus hover:shadow-lg transform hover:-translate-y-0.5'
                        }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span>Via Email</span>
                    </button>

                    {/* WhatsApp Button */}
                    <button 
                        onClick={handleWhatsAppRequest}
                        disabled={!details.name || !details.address || !details.issue}
                        className={`w-full sm:w-auto order-1 sm:order-3 px-6 py-2.5 rounded-full font-bold text-white shadow-md transition-all duration-300 flex items-center justify-center gap-2 ${
                        !details.name || !details.address || !details.issue
                            ? 'bg-gray-300 cursor-not-allowed' 
                            : 'bg-green-500 hover:bg-green-600 hover:shadow-lg transform hover:-translate-y-0.5'
                        }`}
                    >
                        {/* WhatsApp Icon */}
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        <span>Via WhatsApp</span>
                    </button>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
