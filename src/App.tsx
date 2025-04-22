import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HealthTutorials from './pages/HealthTutorials';
import Contact from './pages/Contact';
import About from './pages/About';
import AIChat from './pages/AIChat';
import PatientPortal from './pages/PatientPortal';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/health-tutorials" element={<HealthTutorials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/ai-chat" element={<AIChat />} />
          <Route path="/patient-portal" element={<PatientPortal />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;