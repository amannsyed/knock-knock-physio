
import React, { useState, useEffect } from 'react';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [bookedSlots, setBookedSlots] = useState<Record<string, string[]>>({});
  const [availableDates, setAvailableDates] = useState<Date[]>([]);

  // Hourly session slots
  const times = [
    '09:00', '10:00', '11:00', '12:00', 
    '13:00', '14:00', '15:00', '16:00'
  ];

  useEffect(() => {
    // Generate dates (same logic as BookingModal)
    const dates: Date[] = [];
    const today = new Date();
    let daysAdded = 0;
    let dayOffset = 0;

    while (daysAdded < 14) {
      const date = new Date(today);
      date.setDate(today.getDate() + dayOffset);
      const dayOfWeek = date.getDay(); 

      if (dayOfWeek !== 0) { // Skip Sunday
        dates.push(date);
        daysAdded++;
      }
      dayOffset++;
    }
    setAvailableDates(dates);
    if (!selectedDate) setSelectedDate(dates[0]);

    // Load bookings
    const storedBookings = localStorage.getItem('kkp_bookings');
    if (storedBookings) {
        setBookedSlots(JSON.parse(storedBookings));
    }
  }, []);

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

  const isSlotBlocked = (date: Date, time: string) => {
    const dateKey = date.toISOString().split('T')[0];
    return bookedSlots[dateKey]?.includes(time);
  };

  return (
    <div className="container mx-auto px-6 py-12 min-h-screen">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        <div className="bg-slate-800 text-white p-8 flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold">Schedule Management</h1>
                <p className="text-slate-300 mt-2">Click on time slots to block or unblock them for customers.</p>
            </div>
            <button 
                onClick={onLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition-colors"
            >
                Logout
            </button>
        </div>

        <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column: Dates */}
                <div className="lg:col-span-1">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">1. Select Date</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
                        {availableDates.map((date) => {
                            const isSelected = selectedDate?.toDateString() === date.toDateString();
                            return (
                                <button
                                    key={date.toISOString()}
                                    onClick={() => setSelectedDate(date)}
                                    className={`p-4 rounded-xl flex flex-col items-center justify-center transition-all duration-200 border-2 ${
                                        isSelected 
                                            ? 'border-slate-800 bg-slate-800 text-white shadow-lg scale-105' 
                                            : 'border-gray-100 hover:border-gray-300 text-secondary bg-gray-50'
                                    }`}
                                >
                                    <span className="text-xs font-medium uppercase opacity-80">{date.toLocaleDateString('en-GB', { weekday: 'short' })}</span>
                                    <span className="text-2xl font-bold my-1">{date.getDate()}</span>
                                    <span className="text-xs opacity-80">{date.toLocaleDateString('en-GB', { month: 'short' })}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column: Times */}
                <div className="lg:col-span-2">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">
                        2. Manage Availability 
                        {selectedDate && <span className="text-gray-500 font-normal ml-2">- {selectedDate.toLocaleDateString('en-GB', { weekday: 'long', month: 'long', day: 'numeric' })}</span>}
                    </h2>
                    
                    {selectedDate ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {times.map((time) => {
                                const blocked = isSlotBlocked(selectedDate, time);
                                const startHour = parseInt(time.split(':')[0]);
                                const endTime = `${startHour + 1}:00`;

                                return (
                                    <button
                                        key={time}
                                        onClick={() => toggleSlot(selectedDate, time)}
                                        className={`p-6 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${
                                            blocked
                                                ? 'bg-red-50 border-red-200 hover:border-red-400'
                                                : 'bg-green-50 border-green-200 hover:border-green-400'
                                        }`}
                                    >
                                        <div className="flex flex-col text-left">
                                            <span className={`text-2xl font-bold ${blocked ? 'text-red-700' : 'text-green-700'}`}>
                                                {time} - {endTime}
                                            </span>
                                            <span className={`text-sm font-semibold uppercase tracking-wider mt-1 ${blocked ? 'text-red-500' : 'text-green-600'}`}>
                                                {blocked ? 'Blocked / Booked' : 'Available Online'}
                                            </span>
                                        </div>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${blocked ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'}`}>
                                            {blocked ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 text-gray-400">
                            Select a date to manage slots
                        </div>
                    )}

                    <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <p className="text-sm text-blue-800 font-medium">How this works:</p>
                            <p className="text-sm text-blue-700 mt-1">
                                Blocking a slot here immediately hides it from the "Book Now" calendar on the main website. 
                                Use this to mark times when you are busy, on holiday, or have already accepted a manual booking via WhatsApp.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
