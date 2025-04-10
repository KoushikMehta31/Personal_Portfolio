
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Skills from './Components/Skiils/Skills';
import MyProject from './Components/Projects/MyProject';
import Certifications from './Components/Certifications/Certifications';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/myproject" element={<MyProject />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certifications" element={<Certifications/>} />
      </Routes>
    </Router>
  );
};

export default App;
