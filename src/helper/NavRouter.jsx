import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import ExperiencePage from '../pages/ExperiencePage';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import { Experience } from '../components/Experience';

function NavRouter() {
  return (
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
}

export default NavRouter;
