
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontakt" element={<Contact variant="DE" />} />
        <Route path="/contact-uk" element={<Contact variant="UK" />} />
      </Routes>
    </Router>
  );
};

export default App;
