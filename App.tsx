
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import SchedulePage from './components/SchedulePage';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import { PageType } from './types';
import { SCHEDULES } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Ensure scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleRegisterAction = () => {
    setCurrentPage('register');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero 
              onRegisterClick={handleRegisterAction} 
              onExploreClick={() => setCurrentPage('day1')} 
            />
            <div className="px-6 -mt-10 sm:-mt-20">
              <Countdown />
            </div>
            <EventDetails />
          </>
        );
      case 'day1':
        return <SchedulePage key="day1" title="Day 1" schedule={SCHEDULES.day1} />;
      case 'day2':
        return <SchedulePage key="day2" title="Day 2" schedule={SCHEDULES.day2} />;
      case 'day3':
        return <SchedulePage key="day3" title="Day 3" schedule={SCHEDULES.day3} />;
      case 'register':
        return (
          <div className="py-20 bg-slate-50 min-h-screen">
            <RegistrationForm />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      
      {/* 
          The 'key' prop on the main element ensures that React treats it as a new component 
          on every page change, re-triggering the Tailwind 'animate-in' classes.
      */}
      <main 
        key={currentPage} 
        className="flex-grow pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out"
      >
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
};

export default App;
